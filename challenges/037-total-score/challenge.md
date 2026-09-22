# 037: Total Score 🕹️

**Concept:** summing an array · **Difficulty:** ★★★☆☆

## Goal

Add up the points from all the levels you played.

## Description

You finished a game night and every level gave you points. The function
receives an array of numbers. Return the total.

You already know all the parts: loop over the array (challenge 036) and
keep a running total (challenge 023). Put them together and you have a
sum loop you'll keep reusing all the way into the capstones.

## Examples

| When you call                  | It returns |
| ------------------------------ | ---------- |
| `totalScore([100, 250, 80])`   | `430`      |
| `totalScore([50])`             | `50`       |

## What the tests check

- adds three level scores
- a single level counts too
- no levels played → 0 points

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

`total` starts at 0. Each round of the loop: `total += scores[i];`

</details>
