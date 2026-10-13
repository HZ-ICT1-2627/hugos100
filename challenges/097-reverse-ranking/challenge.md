# 097: Reverse Ranking 🥇

**Concept:** sorting descending · **Difficulty:** ★★★☆☆

## Goal

Rankings go big to small: flip the comparator.

## Description

A leaderboard shows the HIGHEST score first. Yesterday's comparator
`(a, b) => a - b` sorted ascending; swap the subtraction and the
whole order flips:

```js
scores.sort((a, b) => b - a)
```

Sit with that for a second instead of memorizing it: if `a` is 10
and `b` is 50, then `b - a` is positive, which tells sort "the
second one goes first". Big numbers bubble to the front.

Write `ranking(scores)` returning the scores from highest to lowest.

## Examples

| When you call               | It returns        |
| --------------------------- | ----------------- |
| `ranking([30, 100, 20])`    | `[100, 30, 20]`   |
| `ranking([5])`              | `[5]`             |

## What the tests check

- highest score first
- the text-sort trap stays defeated in reverse too
- a single score is its own ranking

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

One character difference from Sort the Scores. Well, two: `b - a`.

</details>
