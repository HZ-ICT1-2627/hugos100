# 040: Grade Counter 📋

**Concept:** loop + `if` + array (unit boss!) · **Difficulty:** ★★★☆☆

## Goal

Count how many grades in the list are passing grades.

## Description

End of the Arrays unit. The boss combines everything: loop over an array,
check each item with a condition, and count the hits.

You get a list of grades from the whole class. Count how many are a pass
(5.5 or higher, as always) and return that count as a number.

The counting pattern is brand new, but only barely: instead of adding the
item to a total like in 037, you add **1** every time the condition is
true.

## Examples

| When you call                          | It returns |
| -------------------------------------- | ---------- |
| `countPasses([7.2, 4.0, 5.5, 9.1])`    | `3`        |
| `countPasses([3.0, 4.5])`              | `0`        |

## What the tests check

- counts 3 passes out of 4 grades
- a class where nobody passed (rough week)
- a class where everybody passed
- exactly 5.5 still counts as a pass

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

`count` starts at 0. Inside the loop:
`if (grades[i] >= 5.5) { count += 1; }`

</details>
