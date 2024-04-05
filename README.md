# gh-toc

Quickly create Table-of-Content Markdown for GitHub Markdown files.

## Overview

> I could never find an easy to use, online table-of-content maker for GitHub Markdown files. There were many solutions that required downloading or installing something on my computer. For such a trivial task I felt that was unnecessary.  
> _— (Words from the [original creator](https://imthenachoman.github.io/nGitHubTOC/))_

I fully agree. This fork has lots of bugfixes and additional features:

- Full Unicode support, all international characters.
- Better handling of (hopefully) all underscore cases.
- Correct handling of ``code with backticks ` inside``.
- Much better code block support (indented, backticks, tildes, differing number of them).
- YAML front matter support.
- Optional output of the full Markdown file, ToC inserted between `<!-- ToC begin -->` and `<!-- ToC end -->` HTML comments, instead of just the ToC. You _can_ insert the ToC multiple times, although I don’t see a use case for that.
  **Now also supports a single `[TOC]`, for convenience.**
- Optional named anchor generation for each ToC element: `—` for GitHub, `HTML` or `{#…}` for other uses.
- Optional use of `id` instead of `name` attribute in generated HTML anchors.

**None of your data is transferred to the Internet.** All work happens in your browser, using JavaScript.

I did lots of testing, rewrote the link generation and added extra functionality, to be as compatbile with GitHub as possible. And then some. It works great, even for difficult cases.

Note _gh-toc_ works with ATX-type headings (`###`). It doesn’t try to parse for Setext (`===`/`---`) or HTML (`<h3>`) headings.

**No other online ToC-Generator I could find handled all the test cases below correctly!**

## Test file

[testing.md](testing.md) is a sample Markdown file with many test cases. Copy its contents into the input box of gh-toc to see what gets generated.

## Test conversion to HTML, using auto-generated links

1. Copy-paste the contents of `testing.md` into the _left_ input box of [gh-toc](https://moonbase59.github.io/gh-toc/).
2. Select
   - Minimum heading level: 1
   - Maximum heading level: 6
   - Full MD: ☑
   - Anchors: HTML
   - Use id: ☐
3. Click `TOC it!` and watch the magic.
4. Copy-paste the contents of the _right_ input box into a text editor and save as `testing-html-anchors.md`.
5. Convert to HTML using [_Pandoc_](https://pandoc.org/):
   ```bash
   pandoc -f markdown-auto_identifiers -t html testing-html-anchors.md -o testing-html-anchors.html
   ```
6. Open [`testing-html-anchors.html`](https://moonbase59.github.io/gh-toc/testing-html-anchors.html) in your favourite browser and test the links.

**Voilà. Enjoy!**

## Known problems

- ~~_gh-toc_ will "brute-force replace" all text between the ToC start  marker `<!-- ToC begin -->` and the end marker `<!-- ToC end -->` with the new Table of Contents, _even if they are in a code block_. Avoid that for now, or don’t use the _Full MD_ option in this case and insert the ToC manually.~~
  _Now fixed and ToC inserting/replacing is safe, even if the "ToC begin/end" comments are out of sequence or one is missing. An alert will pop up if none are found and the ToC cannot be inserted in FullMD mode._

- Selecting _FullMD_ + _Anchor: \{\#…\}_ will overwrite other than anchor definitions within the curly braces, i.e. `{#anchor .red}` → `{#new-anchor}`. Selecting _Anchor: –_ (None) doesn’t modify existing curly brace definitions.

## The Real Magic

https://moonbase59.github.io/gh-toc/
