function tocIt(inputMD, minHeading, maxHeading, ignoreLinex)
{
    if(minHeading > maxHeading) return;

    inputMDLines = inputMD.split("\n");
    var outputMD = "";
    var anchorTracker = {};
    var codeTagEndExpected = false;

    for(var i = 0; i < inputMDLines.length; ++i)
    {
        var inputMDLine = inputMDLines[i].trim();

        var codeTag = /^.*(`{3}) ?(.*)?$/.exec(inputMDLine);
        if(codeTag)
        {
            codeTagEndExpected = !codeTagEndExpected;
            continue;
        }

        var match = /^(#+) (.*)$/.exec(inputMDLine);
        if(!codeTagEndExpected && match)
        {
            var headingLevel = match[1].length;
            var headingTitle = match[2].replace(/<.*?>/g, "");

            if(headingLevel < minHeading || headingLevel > maxHeading)
            {
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
            // Now replace remaining blanks with '-'
            headingAnchor = headingAnchor.replace(/ /gu, "-");
          
            if(headingAnchor in anchorTracker)
            {
                anchorTracker[headingAnchor]++;
                headingAnchor = headingAnchor + "-" + anchorTracker[headingAnchor];
            }
            else
            {
                anchorTracker[headingAnchor] = 0;
            }

            outputMD += " ".repeat(headingLevel * 2) + "- [" + headingTitle + "](#" + headingAnchor + ")\n";
        }
    }

    return outputMD;
}
