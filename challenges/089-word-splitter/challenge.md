# 089: Word Splitter 🧩

**Concept:** `.split()` and `.join()` · **Difficulty:** ★★★☆☆

## Goal

Turn any page title into a clean web address, like real sites do.

## Description

Look at a YouTube or news link: the title `"my summer photos"`
appears in the address as `"my-summer-photos"`. Spaces are illegal
in URLs, so every website on earth does this conversion. Today, so
do you.

Two new methods that are really one round trip:

```js
"my summer photos".split(" ")   // ["my", "summer", "photos"]
["my", "summer", "photos"].join("-")   // "my-summer-photos"
```

`.split(separator)` chops a string into an ARRAY of pieces;
`.join(glue)` welds an array back into a STRING. String to array and
back: everything you know about arrays (loops, `.length`, indexing)
now works on the words of a sentence.

Write both:

- `slugify(title)` returns the title with spaces turned into `-`
- `wordCount(title)` returns how many words the title has (split it,
  then ask the array)

## Examples

| When you call                    | It returns            |
| -------------------------------- | --------------------- |
| `slugify("my summer photos")`    | `"my-summer-photos"`  |
| `wordCount("my summer photos")`  | `3`                   |
| `wordCount("hi")`                | `1`                   |

## What the tests check

- slugify replaces spaces with dashes
- a one-word title survives unchanged
- wordCount counts the words
- a single word counts as one

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

`slugify` is a one-liner: split on `" "`, join with `"-"`, methods
chained back to back. `wordCount` splits and returns the array's
`.length`.

</details>
