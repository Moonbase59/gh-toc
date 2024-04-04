function tocIt(inputMD, minHeading, maxHeading, ignoreLinex) {

    if(minHeading > maxHeading) return;

    inputMDLines = inputMD.split("\n");
    var outputMD = "";
    var anchorTracker = {};
    var codeTagEndExpected = false;
    var codeTagLevel = 0;
    var frontmatterEndExpected = false;

    for(var i = 0; i < inputMDLines.length; ++i) {
        var inputMDLine = inputMDLines[i].trim();

        // Front matter starts/ends with triple-dashed lines.
        // It must start at the beginning of the file.
        var frontmatterTag = inputMDLine == "---";
        if (frontmatterTag) {
            if (i == 0) {
                frontmatterEndExpected = true;
            } else {
                frontmatterEndExpected = false;
            }
            continue;
        }

        // code tags can have 3 or more backticks or tildes,
        // highest number is outermost level
        // ending tag must have at least the same number of backticks/tildes
        var codeTag = /^[^`~]*([`~]{3,}) ?(.*)?$/.exec(inputMDLine);
        if (!frontmatterEndExpected && codeTag) {
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

        var match = /^(#+) (.*)$/.exec(inputMDLine);
        if (!frontmatterEndExpected && !codeTagEndExpected && match) {
            var headingLevel = match[1].length;
            var headingTitle = match[2].replace(/<.*?>/g, "");

            if(headingLevel < minHeading || headingLevel > maxHeading) {
                continue;
            }

            headingLevel -= minHeading;
          
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
                anchorTracker[headingAnchor]++;
                headingAnchor = headingAnchor + "-" + anchorTracker[headingAnchor];
            }
            anchorTracker[headingAnchor] = 0;

            outputMD += " ".repeat(headingLevel * 2) + "- [" + headingTitle + "](#" + headingAnchor + ")\n";
        }
    }

    outputMD =
        "<!-- ToC begin -->\n"
        + '<a name="toc"></a>\n'  // Backlink ToC anchor: [Table of Contents](#toc)
        + outputMD
        + "<!-- Generated by gh-toc, https://moonbase59.github.io/gh-toc/ -->\n"
        + "<!-- ToC end -->\n";

    return outputMD;
}
