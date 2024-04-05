// gh-toc.js
// Copyright (c) 2024 Matthias C. Hormann a.k.a. Moonbase59
// 2024-04-05

function tocIt(inputMD, minHeading, maxHeading, fullMD, addAnchors, useID) {

    // addAnchors can be: "none", "HTML", "braces"

    var anchorAttribute = "name";
    if (useID) {
        anchorAttribute = "id";
    }

    if(minHeading > maxHeading) return;

    inputMDLines = inputMD.split("\n");
    var outputMD = "";
    var anchorTracker = {};
    var codeTagEndExpected = false;
    var codeTagLevel = 0;
    var frontmatterEndExpected = false;
    var lastLineBlank = false;
    var indentedCodeEndExpected = false;
    var tocTracker = [];
    var tocNumber = 0;

    for(var line = 0; line < inputMDLines.length; ++line) {
        //var inputMDLine = inputMDLines[line].trim();
        var inputMDLine = inputMDLines[line];

        // Front matter starts/ends with triple-dashed lines.
        // It must start at the beginning of the file.
        var frontmatterTag = inputMDLine == "---";
        if (frontmatterTag) {
            if (line == 0) {
                frontmatterEndExpected = true;
            } else {
                frontmatterEndExpected = false;
            }
            continue;
        }
        // skip all front matter
        if (frontmatterEndExpected) {
            continue;
        }

        // Skip blank lines.
        // Blank lines can start indented code, so remember.
        var blankLine = /^(\s*)$/.exec(inputMDLine);
        if (blankLine) {
            lastLineBlank = true;
            continue;
        }
        
        // Skip code lines. They start with 4+ spaces,
        // and must be preceded by a blank line.
        var codeLine = /^ {4,}.*$/gm.exec(inputMDLine);
        if (codeLine) {
            if (lastLineBlank) {
                indentedCodeEndExpected = true;
            }
            if (indentedCodeEndExpected) {
                continue;
            }
        } else {
            indentedCodeEndExpected = false;
        }

        lastLineBlank = false;
        
        // Code tags can have 3 or more backticks or tildes,
        // highest number is outermost level.
        // They can be preceded by 0–3 spaces.
        // Ending tag must have at least the same number of backticks/tildes.
        var codeTag = /^ {0,3}([`~]{3,}) ?(.*)?$/.exec(inputMDLine);
        if (codeTag) {
            level = codeTag[1].length;  // number of backticks or tildes
            if (level >= codeTagLevel) {
                codeTagEndExpected = !codeTagEndExpected;
                codeTagLevel = level;
                if (codeTagEndExpected === false) {
                    codeTagLevel = 0;
                }
                continue;
            }
        }

        // save position of <!-- ToC begin --> and <!-- ToC end --> lines
        // This tries to avoid sequence errors and single begin/end comments.
        // For convenience, it now also supports a single [TOC]
        var tocComment = /^<!--\s*ToC (begin|end)\s*-->$|^\[(TOC)\]$/gumis.exec(inputMDLine);
        if (tocComment) {
            var r = "";
            if (tocComment[1] === undefined) {
                r = tocComment[2].toLowerCase();
            }
            else {
                r = tocComment[1].toLowerCase();
            }
            if (r == "begin" || r == "toc") {
                tocNumber++;
                tocTracker[tocNumber] = {"begin": line, "end": -1};
                // [TOC] is single, set end line for replace
                if (r == "toc") {
                    tocTracker[tocNumber]["end"] = line;
                }
            } else if (tocNumber > 0 && tocTracker[tocNumber]["end"] < 0){
                tocTracker[tocNumber]["end"] = line;
            }
            continue;
        }

        // Now find and handle ATX headings
        var match = /^ {0,3}(#+) (.*?)( {.*})?$/.exec(inputMDLine);
        // match: $1=ATX header, $2=title, $3=last {} block incl. blank before
        if (!codeTagEndExpected && match) {
            var headingLevel = match[1].length;
            var headingTitle = match[2].replace(/<.*?>/g, "");
            var headingAttrib = match[3] || "";

            if(headingLevel < minHeading || headingLevel > maxHeading) {
                continue;
            }

            var outputHeadingLevel = headingLevel - minHeading;
          
            if (addAnchors == "none") {
                // GitHub ignores appended {#…} in headings and includes that part
                headingTitle = headingTitle + headingAttrib;
            }
            // make everything (Unicode-aware) lower case
            var headingAnchor = headingTitle.toLowerCase();
            // remove everything that is NOT a (Unicode) Letter, (Unicode) Number decimal,
            // (Unicode) Number letter, white space, underscore or hyphen
            headingAnchor = headingAnchor.replace(/[^\p{L}\p{Nd}\p{Nl}\s_\-`]/gu, "");
            // remove sequences of *
            headingAnchor = headingAnchor.replace(/\*(?=.*)/gu, "");
            // Underscore handling is complex:
            //   Alternative 1: Keep in `code` ``blocks``, and remove the backticks
            //     --> match group $2
            //   Alternative 2: Remove if not in-word
            //     --> $3 - whitespace before, $4 content, $5 whitespace after
            headingAnchor = headingAnchor.replace(
                /(`(?:`*)?)(.*?)(?:\1)|(\s*)_+([^\s_].+[^\s_])_+(\s*)/gu,
                "$2$3$4$5"
            );
            // remove leftover backticks
            headingAnchor = headingAnchor.replace(/`/gu, "");
            // Now replace remaining blanks with '-'
            headingAnchor = headingAnchor.replace(/ /gu, "-");
          
            // need a loop since result might already been taken
            while (headingAnchor in anchorTracker) {
                anchorTracker[headingAnchor]["sequence"]++;
                headingAnchor = headingAnchor + "-" + anchorTracker[headingAnchor]["sequence"];
            }
            anchorTracker[headingAnchor] = {
                "sequence": 0,
                "line": line,
                "level": headingLevel,
                "title": headingTitle,
                "attrib": headingAttrib
            }

            outputMD += " ".repeat(outputHeadingLevel * 2) + "- [" + headingTitle + "](#" + headingAnchor + ")\n";
        }
    }

    // build ToC
    toc =
        "<!-- ToC begin -->\n"
        + '<a ' + anchorAttribute + '="toc"></a>\n'  // Backlink to ToC anchor
        + outputMD
        + "<!-- Generated by gh-toc, https://moonbase59.github.io/gh-toc/ -->\n"
        + "<!-- ToC end -->";

    // if addAnchors requested, rebuild affected Markdown lines from the anchorTracker
    if (fullMD && ["HTML", "braces"].includes(addAnchors)) {
        for (const [k, v] of Object.entries(anchorTracker)) {
            var inputMDLine = inputMDLines[v["line"]];
            var parts = /^([\s]*)(.*?)([\s]*)$/.exec(inputMDLine);
            // parts: $1=whitespace before, $2=content, $3=whitespace after
            
            if (addAnchors == "HTML") {
                // construct ### <a name="name"></a>Heading Title
                var anchor = '<a ' + anchorAttribute + '="' + k + '"></a>';
                var outputMDLine =
                    parts[1] + "#".repeat(v["level"]) + " " + anchor + v["title"] + parts[3];
            } else if (addAnchors == "braces") {
                // construct ### Heading Title {#name}
                var anchor = ' {#' + k + '}';
                var outputMDLine =
                    parts[1] + "#".repeat(v["level"]) + " " + v["title"] + anchor + parts[3];
            }

            inputMDLines[v["line"]] = outputMDLine;
        }
        inputMD = inputMDLines.join('\n');
    }

    // if full Markdown requested, try to add ToC between
    //   <!-- ToC begin -->
    //   ...
    //   <!-- ToC end -->
    // These two lines should be exactly as shown.
    // This works safely now, ignoring wrong ToC begin/end sequence & missing ones.
    if (fullMD) {
        var tocLines = toc.split("\n");
        var outputMDLines = inputMDLines;
        var lineOffset = 0;
        var changed = false;
        
        function insertToc(v, i, arr) {
            // end=-1 signifies a ToC begin without end,
            if (v["end"] > -1) {
                toRemove = v["end"] - v["begin"] + 1;
                // beware: splice modifies the array
                removed = outputMDLines.splice(
                    v["begin"] + lineOffset, toRemove, ...tocLines);
                lineOffset += -removed.length + tocLines.length;
                changed = true;
            }
        }
        
        tocTracker.forEach(insertToc);

        outputMD = outputMDLines.join('\n');

        if (!changed) {
            alert("Cannot insert Table of Contents, missing one or both of\n"
                + "<!-- ToC begin -->\n<!-- ToC end -->\n"
                + "These should be exactly as shown.\n"
                + "You can also use a single [TOC] instead.");
        }
    }

    return outputMD;
}
