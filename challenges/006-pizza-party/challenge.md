# 006: Pizza Party 🍕

**Concept:** doing math with numbers · **Difficulty:** ★☆☆☆☆

## Goal

Calculate how many slices of pizza each friend gets.

## Description

JavaScript is a great calculator. The math operators are:

```js
4 + 2   // 6   addition
4 - 2   // 2   subtraction
4 * 2   // 8   multiplication
4 / 2   // 2   division
```

You ordered pizza for your friends. The function receives the total number
of `slices` and the number of `friends`. Everyone gets an equal share.
Return how many slices each friend gets.

Notice: numbers don't use quotes. `8` is a number you can calculate with;
`"8"` is just text that happens to look like one.

## Examples

| When you call        | It returns |
| -------------------- | ---------- |
| `slicesEach(8, 4)`   | `2`        |
| `slicesEach(20, 5)`  | `4`        |

## What the tests check

- 8 slices for 4 friends → 2 each
- 20 slices for 5 friends → 4 each

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

Which of the four operators shares something out equally?

</details>

<details>
<summary>💡 Hint 2 (click to open)</summary>

`return slices / friends;`

</details>
