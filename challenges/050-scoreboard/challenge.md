# 050: Scoreboard 🥇

**Concept:** functions working together (unit boss!) · **Difficulty:** ★★★★☆

## Goal

Build two scoreboard functions that work as a team. You're halfway through
the course!

## Description

The boss of the Functions unit, and the gateway to the second half of
Hugo's 100. You write both functions from scratch.

**`addPoints(scores, points)`**
Takes an array of scores and a number. Pushes the number onto the array
and returns the array. (Challenge 033 vibes.)

**`averageScore(scores)`**
Returns the average: the sum of all scores divided by how many there are.
You built the sum in challenge 037. If the array is empty, return `0`
(a guard clause! Otherwise you'd divide by zero).

The functions share no code, but together they're the start of a real
scoreboard. In the Objects unit you'll start bundling data and functions
like these into one package.

## Examples

| When you call                    | It returns        |
| -------------------------------- | ----------------- |
| `addPoints([10, 20], 30)`        | `[10, 20, 30]`    |
| `averageScore([10, 20, 30])`     | `20`              |
| `averageScore([])`               | `0`               |

## What the tests check

- addPoints adds to the end of the list
- addPoints works on an empty list
- averageScore averages three scores
- averageScore of one score is that score
- averageScore of an empty list is 0 (the guard!)

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

Don't forget: this is a from-scratch day. You also write the
`module.exports = { addPoints, averageScore };` line yourself.

</details>

<details>
<summary>💡 Hint 2 (click to open)</summary>

averageScore in three steps: guard for empty, sum with a loop, then
`return sum / scores.length;`

</details>
