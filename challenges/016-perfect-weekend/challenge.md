# 016: Perfect Weekend 🎮

**Concept:** logical AND (`&&`) · **Difficulty:** ★★☆☆☆

## Goal

It's a gaming weekend only if it's the weekend **and** your homework is done.

## Description

Sometimes one condition isn't enough. `&&` (AND) combines two, and both must
be true:

```js
if (isSunny && isWarm) {
  return "Beach day!";
}
```

Your function receives two **booleans**: values that are simply `true` or
`false` (no quotes! `true` is a value of its own, `"true"` is just text).

Return `"Game on! 🎮"` if `isWeekend` AND `homeworkDone` are both true.
Otherwise return `"Not yet..."`.

## Examples

| When you call               | It returns      |
| --------------------------- | --------------- |
| `gamingTime(true, true)`    | `"Game on! 🎮"` |
| `gamingTime(true, false)`   | `"Not yet..."`  |
| `gamingTime(false, true)`   | `"Not yet..."`  |

## What the tests check

- weekend + homework done → game on
- weekend but homework not done → not yet
- homework done but it's a school day → not yet

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

Booleans ARE already conditions, so `if (isWeekend && homeworkDone)` is all
you need. No `=== true` required.

</details>
