# gh-toc

Quickly create Table-of-Content Markdown for GitHub Markdown files.

## Overview

> I could never find an easy to use, online table-of-content maker for GitHub Markdown files. There were many solutions that required downloading or installing something on my computer. For such a trivial task I felt that was unnecessary.  
> _— (Words from the [original creator](https://imthenachoman.github.io/nGitHubTOC/))_

I fully agree. This fork has lots of bugfixes and enhancements:

- Full Unicode support, all international characters.
- Better handling of (hopefully) all underscore cases.
- Correct handling of ``code with backticks ` inside``.
- Much better code block support (backticks, tildes, differing number of them).
- YAML front matter support.

**None of your data is transferred to the Internet.** All work happens in your browser, using JavaScript.

I did lots of testing, rewrote the link generation and added extra functionality, to be as compatbile with GitHub as possible. It works great, even for difficult cases.

## Test file

[testing.md](testing.md) is a sample Markdown file with many test cases. Copy its contents into the input box of gh-toc to see what gets generated.

## The Real Magic

https://moonbase59.github.io/gh-toc/
