# 064: Pick a Number 🎯

**Concept:** random between min and max · **Difficulty:** ★★★☆☆

## Goal

Upgrade the dice recipe so it can hit any range you ask for.

## Description

"Pick a number between 10 and 20." The die from 062 always rolled
1 to 6; `randomBetween(min, max)` returns a whole number from `min`
to `max`, both ends included.

The general recipe, worth memorizing because every game you'll ever
write wants it:

```js
Math.floor(Math.random() * (max - min + 1)) + min
```

Sanity-check it against the die: `min` 1, `max` 6 gives
`Math.floor(Math.random() * 6) + 1`. Same formula, so the die was
this recipe in disguise. The `max - min + 1` is HOW MANY numbers
you want, the `+ min` slides the whole batch up to start at the
right place.

## Examples

| When you call            | It returns                       |
| ------------------------ | -------------------------------- |
| `randomBetween(1, 6)`    | a whole number from 1 to 6       |
| `randomBetween(10, 20)`  | a whole number from 10 to 20     |
| `randomBetween(5, 5)`    | `5`, no other choice             |

## What the tests check

- 200 picks between 10 and 20 stay in range
- every pick is a whole number
- both ends of the range actually come up
- a one-number range always returns that number

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

The recipe from the description is the whole function body, behind a
`return`.

</details>
