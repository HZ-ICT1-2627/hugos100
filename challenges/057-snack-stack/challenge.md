# 057: Snack Stack 🍿

**Concept:** recursion on arrays · **Difficulty:** ★★★★☆

## Goal

Total up a snack pile by eating the first item and recursing on the rest.

## Description

Movie night, and the table holds a stack of snacks with calorie
counts: `[220, 150, 310]`. You summed arrays with loops back in 037.
The recursive version has its own charm: the total of a pile is the
FIRST snack plus the total of the rest of the pile.

`totalCalories(calories)` works the doll way:

- base case: an empty pile totals `0`
- recursive case: `calories[0] + totalCalories(calories.slice(1))`

Good news: `.slice(1)` works on arrays exactly like it does on
strings. `[220, 150, 310].slice(1)` is `[150, 310]`, a new shorter
array, original untouched. Strings and arrays keep sharing tools;
that's not a coincidence, both are lines of things with positions.

## Examples

| When you call                       | It returns |
| ----------------------------------- | ---------- |
| `totalCalories([220, 150, 310])`    | `680`      |
| `totalCalories([])`                 | `0`        |

## What the tests check

- totals a snack pile
- one snack is its own total
- an empty pile totals zero
- no for, no while (we peek!)

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

`calories.length === 0` is the empty-pile check. After that,
one line: the first item plus the total of the sliced rest.

</details>
