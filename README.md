# gh-toc

A simple web page to quickly create table of content Markdown for GitHub Markdown files.

## Overview

> I could never find an easy to use, online table-of-content maker for GitHub markdown files. There were many solutions that required downloading or installing something on my computer. For such a trivial task I felt that was unnecessary.
> _— (Words from the [original creator](https://imthenachoman.github.io/nGitHubTOC/))_

I fully agree. This is just a fork for my use, with no Google Analytics and some bugfixes.

This page just uses JavaScript to extract headings from a markdown file and return table-of-content markdown.

I did lots of testing and rewrote the RegExes to be as compatbile with GitHub as possible. So far it works great, even for difficult cases.

## Test file

[testing.md](testing.md) is a short test file with a lot of odd characters. Copy its contents into the input box of gh-toc to see what gets generated.

## The Real Magic

https://moonbase59.github.io/gh-toc/
