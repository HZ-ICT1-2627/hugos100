# 026: Times Table ✖️

**Concept:** building lines with `\n` · **Difficulty:** ★★★☆☆

## Goal

Return the first five lines of a number's times table.

## Description

Meet a special character: `\n`. Inside a string, it means "start a new
line":

```js
console.log("line one\nline two");
// line one
// line two
```

Your little cousin is learning multiplication. Build the first five lines
of the times table of a number, like this for 2:

```text
1 x 2 = 2
2 x 2 = 4
3 x 2 = 6
4 x 2 = 8
5 x 2 = 10
```

Each line ends with `\n`. A template literal keeps it readable:
`` `${i} x ${number} = ${i * number}\n` ``

## Examples

| When you call    | It returns                                          |
| ---------------- | --------------------------------------------------- |
| `timesTable(2)`  | `"1 x 2 = 2\n2 x 2 = 4\n3 x 2 = 6\n4 x 2 = 8\n5 x 2 = 10\n"` |

## What the tests check

- the table of 2
- the table of 7

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

Loop `i` from 1 to 5 and add one full line to your string each round.

</details>

<details>
<summary>💡 Hint 2 (click to open)</summary>

Uncomment the demo line at the bottom of solution.js and run it with node.
You'll see the real lines instead of `\n` symbols.

</details>
