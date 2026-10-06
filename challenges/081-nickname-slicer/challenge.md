# 081: Nickname Slicer ✂️

**Concept:** `.slice()` on strings · **Difficulty:** ★★☆☆☆

## Goal

Cut a jersey tag out of any name: the first three letters, in capitals.

## Description

`.slice()` is back. The recursion unit used the one-argument version
(`word.slice(1)`, everything from position 1 onward). The full form
is `.slice(start, end)`: `start` is the index where the cut begins
(counting from 0, like arrays), `end` is where it stops, NOT
included:

```js
"Benjamin".slice(0, 3)   // "Ben"
"Benjamin".slice(3, 6)   // "jam" (tasty)
```

Sports jerseys show a three-letter tag: `tagOf("Benjamin")` is
`"BEN"`. Slice first, then uppercase. Bonus fact for free: slicing
past the end of a short name just gives what's there, no crash, so
`"Mo"` becomes `"MO"` without special code.

## Examples

| When you call        | It returns |
| -------------------- | ---------- |
| `tagOf("Benjamin")`  | `"BEN"`    |
| `tagOf("ada")`       | `"ADA"`    |
| `tagOf("Mo")`        | `"MO"`     |

## What the tests check

- makes BEN out of Benjamin
- lowercase names get capital tags
- short names keep what they have

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

Methods chain: `name.slice(0, 3).toUpperCase()` cuts first, shouts
second.

</details>
