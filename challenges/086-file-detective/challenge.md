# 086: File Detective 🕵️

**Concept:** `.startsWith()` and `.endsWith()` · **Difficulty:** ★★★☆☆

## Goal

Judge files by their names: what's an image, what's hidden?

## Description

Two string methods that answer yes/no questions about the edges of a
string:

```js
"holiday.png".endsWith(".png")   // true
".secrets.txt".startsWith(".")   // true
```

Two functions:

1. `isImage(filename)`: true when the name ends with `".png"` or
   `".jpg"`
2. `isHidden(filename)`: true when the name starts with `"."` (the
   convention for hidden files on Mac and Linux, and yes, that's
   exactly what `.gitignore` in your repo is doing)

Both return booleans directly, one line each, 046 style.

## Examples

| When you call                 | It returns |
| ----------------------------- | ---------- |
| `isImage("holiday.png")`      | `true`     |
| `isImage("essay.docx")`       | `false`    |
| `isHidden(".gitignore")`      | `true`     |

## What the tests check

- png and jpg are images
- other files are not
- dot-files are hidden
- a dot in the MIDDLE doesn't make a file hidden

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

isImage is an `||` of two `.endsWith()` calls.

</details>
