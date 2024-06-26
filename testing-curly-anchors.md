---
title: testing.md
subtitle: Testing edge cases for gh-toc
author: Matthias C. Hormann, a.k.a. Moonbase59
date: 2024-04-08
lang: en
# A YAML comment that could be mis-interpreted as a H1 heading.
# Use Pandoc’s default template, even if using our styling example CSS.
document-css: true
# Include the following for a wild CSS hack!
css: gh-toc.css
---
# gh-toc {#gh-toc}

These are some testing samples for [gh-toc](https://moonbase59.github.io/gh-toc/).

Let’s check if these coincide with whatever GitHub Markdown comes up with!

## The generated ToC (copy-pasted) {#the-generated-toc-copy-pasted}

<!-- ToC begin -->
<a name="toc"></a>

- [gh-toc](#gh-toc)
  - [The generated ToC (copy-pasted)](#the-generated-toc-copy-pasted)
  - [Foreign characters](#foreign-characters)
    - [Accents: äöüßÄÖÜẞ áéíóú ÁÉÍÓÚ àèìòù ñÑõÕ çÇ øØ](#accents-äöüßäöüß-áéíóú-áéíóú-àèìòù-ññõõ-çç-øø)
    - [Russian: Какой-то русский текст…](#russian-какой-то-русский-текст)
  - [Numbers: 0123 ⑴⑵⑶ ⅰ ⅱ ⅲ Ⅰ Ⅱ Ⅲ ²³ ¼½](#numbers-0123--ⅰ-ⅱ-ⅲ-ⅰ-ⅱ-ⅲ--)
  - [Underscore within code tags](#underscore-within-code-tags)
    - [Some `code_with_underscores += a*b`](#some-code_with_underscores--ab)
    - [More `code_bars`](#more-code_bars)
    - [We might have ``double_quoted_code``](#we-might-have-double_quoted_code)
    - [Or even ``double-quoted with single backticks ` inside!``](#or-even-double-quoted-with-single-backticks--inside)
  - [Underscore special cases](#underscore-special-cases)
    - [Just __ some underlines, or __dunders__](#just-__-some-underlines-or-dunders)
    - [___](#___)
    - [__](#__)
    - [__dunder__](#dunder)
    - [_emphasis_](#emphasis)
    - [_ emph _](#_-emph-_)
    - [_in a *sentence*_](#in-a-sentence)
    - [_in_word_parsing_](#in_word_parsing)
    - [_another_in_word_example_](#another_in_word_example)
  - [Markdown](#markdown)
    - [Some _emphasized_ text](#some-emphasized-text)
    - [Some **bold** text](#some-bold-text)
    - [Some ~~strikethrough~~ text](#some-strikethrough-text)
    - [Anchors](#anchors)
    - [Anchors](#anchors-1)
  - [More character codes](#more-character-codes)
    - [Apostrophes and such: "a" 'b' “c” ‘d’ »e« ›f‹ „g“ ‚h‘](#apostrophes-and-such-a-b-c-d-e-f-g-h)
    - [(Parentheses), [brackets] and](#parentheses-brackets-and)
    - [Arrows: ←↓↑→ ↕⇵ ⏎](#arrows---)
    - [Symbols: ☯ ☎ 🂡](#symbols---)
    - [Currency: $ € £ ₽ ¤](#currency-----)
    - [Other: ℗©™](#other-)
  - [Repeated Headings](#repeated-headings)
    - [Heading](#heading)
    - [Heading](#heading-1)
    - [Heading](#heading-2)
    - [Heading 2](#heading-2-1)
    - [Heading](#heading-3)
  - [Numbered Headings](#numbered-headings)
    - [3. A section](#3-a-section)
      - [3.1 Sub-section](#31-sub-section)
        - [3.1.1 Sub-sub-section](#311-sub-sub-section)
        - [3.1.2 Sub-sub-section](#312-sub-sub-section)
        - [3.1.3 Sub-sub-section](#313-sub-sub-section)
      - [3.2 Sub-section](#32-sub-section)
        - [3.2.1 Sub-sub-section](#321-sub-sub-section)
        - [3.2.2 Sub-sub-section](#322-sub-sub-section)
        - [3.2.3 Sub-sub-section](#323-sub-sub-section)
  - [Code blocks](#code-blocks)
  - [Back again from the code blocks](#back-again-from-the-code-blocks)
  - [Indentation (4+ spaces is code)](#indentation-4-spaces-is-code)
    - [None](#none)
    - [1 space](#1-space)
    - [2 spaces](#2-spaces)
    - [3 spaces](#3-spaces)
  - [Dummy text so we can see the browser jump to the desired heading](#dummy-text-so-we-can-see-the-browser-jump-to-the-desired-heading)
<!-- Generated by gh-toc, https://moonbase59.github.io/gh-toc/ -->
<!-- ToC end -->

## Foreign characters {#foreign-characters}
### Accents: äöüßÄÖÜẞ áéíóú ÁÉÍÓÚ àèìòù ñÑõÕ çÇ øØ {#accents-äöüßäöüß-áéíóú-áéíóú-àèìòù-ññõõ-çç-øø}
### Russian: Какой-то русский текст… {#russian-какой-то-русский-текст}

## Numbers: 0123 ⑴⑵⑶ ⅰ ⅱ ⅲ Ⅰ Ⅱ Ⅲ ²³ ¼½ {#numbers-0123--ⅰ-ⅱ-ⅲ-ⅰ-ⅱ-ⅲ--}

## Underscore within code tags {#underscore-within-code-tags}
### Some `code_with_underscores += a*b` {#some-code_with_underscores--ab}
### More `code_bars` {#more-code_bars}
### We might have ``double_quoted_code`` {#we-might-have-double_quoted_code}
### Or even ``double-quoted with single backticks ` inside!`` {#or-even-double-quoted-with-single-backticks--inside}

## Underscore special cases {#underscore-special-cases}
### Just __ some underlines, or __dunders__ {#just-__-some-underlines-or-dunders}
### ___ {#___}
### __ {#__}
### __dunder__ {#dunder}
### _emphasis_ {#emphasis}
### _ emph _ {#_-emph-_}
### _in a *sentence*_ {#in-a-sentence}
### _in_word_parsing_ {#in_word_parsing}
### _another_in_word_example_ {#another_in_word_example}

## Markdown {#markdown}

You can backlink to your generated [Table of Contents](#toc) anywhere using
```
[Table of Contents](#toc)
```

### Some _emphasized_ text {#some-emphasized-text}
### Some **bold** text {#some-bold-text}
### Some ~~strikethrough~~ text {#some-strikethrough-text}
### Anchors {#anchors}
### Anchors {#anchors-1}

## More character codes {#more-character-codes}
### Apostrophes and such: "a" 'b' “c” ‘d’ »e« ›f‹ „g“ ‚h‘ {#apostrophes-and-such-a-b-c-d-e-f-g-h}
### (Parentheses), [brackets] and {#parentheses-brackets-and}
### Arrows: ←↓↑→ ↕⇵ ⏎ {#arrows---}
### Symbols: ☯ ☎ 🂡 {#symbols---}
### Currency: $ € £ ₽ ¤ {#currency-----}
### Other: ℗©™ {#other-}

## Repeated Headings {#repeated-headings}

Repeated headings auto-generate links with appended numbers, like `-1`, `-2`, etc.

### Heading {#heading}

This will generate the link `#heading`.

### Heading {#heading-1}

This generates `#heading-1`.

### Heading {#heading-2}

This generates `#heading-2`.

### Heading 2 {#heading-2-1}

This _would_ generate `#heading-2`, but since that has been used already, it now generates `#heading-2-1`.

### Heading {#heading-3}

This generates `#heading-3` as expected.

## Numbered Headings {#numbered-headings}

### 3. A section {#3-a-section}
#### 3.1 Sub-section {#31-sub-section}
##### 3.1.1 Sub-sub-section {#311-sub-sub-section}
##### 3.1.2 Sub-sub-section {#312-sub-sub-section}
##### 3.1.3 Sub-sub-section {#313-sub-sub-section}
#### 3.2 Sub-section {#32-sub-section}
##### 3.2.1 Sub-sub-section {#321-sub-sub-section}
##### 3.2.2 Sub-sub-section {#322-sub-sub-section}
##### 3.2.3 Sub-sub-section {#323-sub-sub-section}

## Code blocks {#code-blocks}

```
## What if this is in a code block?
```

`````
```
## Code level 3 inside level 5 block
```
`````

````
```
## Code level 3 inside level 4 block, no level 3 end
````

```markdown
## Code tag with name
```

~~~~ {#mycode .markdown .numberLines startFrom="100"}
## fenced code block starting with 4, ending with 6 tildes
~~~~~~

   ``` indented code block 3 spaces
   ## 3-space indented code block
   ```
   
    ``` not a fenced code block but still a code block (4 spaces)
    ## 4-space indent—treat as code
    ```

    ## This is an indented code block (4+ spaces)
    More text here (also "code").

## Back again from the code blocks {#back-again-from-the-code-blocks}

## Indentation (4+ spaces is code) {#indentation-4-spaces-is-code}

### None {#none}

 ### 1 space {#1-space}

  ### 2 spaces {#2-spaces}

   ### 3 spaces {#3-spaces}

    ### 4 spaces, empty line before (consider as code)

Lots of characters normally _not_ in headings, but they shouldn’t break link generation.

## Dummy text so we can see the browser jump to the desired heading {#dummy-text-so-we-can-see-the-browser-jump-to-the-desired-heading}

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.

Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien.

Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy yesmummy canbare metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede.

Sed lectus. Donec mollis hendrerit risus. Phasellus nec sem in justo pellentesque facilisis. Etiam imperdiet imperdiet orci. Nunc nec neque. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa. Sed cursus turpis vitae tortor. Donec posuere vulputate arcu. Phasellus accumsan cursus velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis augue porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Phasellus consectetuer vestibulum elit. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Vestibulum fringilla pede sit amet augue. In turpis. Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Nullam sagittis. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus. Ut varius tincidunt libero. Phasellus dolor.

**Enjoy!**
