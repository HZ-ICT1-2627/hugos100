# 099: Podium 🏆

**Concept:** sort + array `.slice()` · **Difficulty:** ★★★★☆

## Goal

The top three scores get a podium. The rest get a participation vibe.

## Description

Two steps: sort the scores from high to low, then keep the first
three. For the keeping part, remember `.slice`? You shrank arrays
with it in 057 and cut strings with it all through unit 9. The
two-argument form on an array, `.slice(0, 3)`, copies the first
three items into a new array.

`podium(scores)` returns the top three, highest first. Fewer than
three scores? Slice past the end just gives what's there, so a
two-person race has a two-step podium. No special code.

## Examples

| When you call                     | It returns        |
| --------------------------------- | ----------------- |
| `podium([40, 90, 10, 70, 55])`    | `[90, 70, 55]`    |
| `podium([12, 8])`                 | `[12, 8]`         |

## What the tests check

- picks the three highest, in order
- a two-score race has a two-step podium
- exactly three scores all make the podium

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

`return scores.sort((a, b) => b - a).slice(0, 3);` reads like the
instructions: sort descending, take three.

</details>
