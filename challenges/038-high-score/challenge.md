# 038: High Score 🏆

**Concept:** finding the biggest value · **Difficulty:** ★★★☆☆

## Goal

Find the highest score in the list.

## Description

The arcade machine shows only the high score, and you get to program it.
How do you find the biggest number in an array? The classic recipe:

1. Keep a variable `highest`, starting at the first score
2. Loop over the array
3. Every time you see a score bigger than `highest`, it becomes the new
   `highest`

```js
if (scores[i] > highest) {
  highest = scores[i];
}
```

After the loop, `highest` holds the winner. Walk through the example below
on paper if it feels strange: that feeling is normal and goes away exactly
once you trace it once.

## Examples

| When you call                    | It returns |
| -------------------------------- | ---------- |
| `highScore([120, 90, 300, 250])` | `300`      |
| `highScore([42])`                | `42`       |

## What the tests check

- finds the highest of four scores
- works when the highest is the FIRST score
- works when the highest is the LAST score
- a single score is automatically the highest

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

Start `highest` at `scores[0]`, not at 0. (Why? It also works for lists of
negative numbers, and it's the habit pros have.)

</details>
