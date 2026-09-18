# 030: Star Staircase ⭐

**Concept:** growing strings inside a loop (unit boss!) · **Difficulty:** ★★★☆☆

## Goal

Build a staircase of stars, each row one star longer than the last.

## Description

Last loop challenge: a little ASCII art. A staircase of 3 levels looks like
this:

```text
*
**
***
```

As a string that's `"*\n**\n***\n"`: each row has as many stars as its row
number, and each row ends with `\n`.

The slick trick: you don't need a loop inside a loop. Keep a `row` string
that starts empty. Each round of the loop, add one `*` to `row`, then add
the whole `row` plus `\n` to your staircase. The row grows by itself!

(A loop inside a loop works too, and you may try it. Both are correct.)

## Examples

| When you call       | It returns          |
| ------------------- | ------------------- |
| `starStaircase(3)`  | `"*\n**\n***\n"`    |
| `starStaircase(1)`  | `"*\n"`             |

## What the tests check

- a staircase of 3 levels
- a staircase of 5 levels
- a single step

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

Two string variables: `staircase` (the full result) and `row` (the current
line). Both start empty.

</details>

<details>
<summary>💡 Hint 2 (click to open)</summary>

Inside the loop, in this order: `row += "*";` then `staircase += row + "\n";`

</details>
