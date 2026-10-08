# 087: Clock Padder 🕰️

**Concept:** `.padStart()` · **Difficulty:** ★★★☆☆

## Goal

Make single digits dress properly for the scoreboard: 7 becomes 07.

## Description

A clock that shows `5:7` looks broken; people expect `5:07`. You
could pad the seconds with an `if` and a hand-glued `"0"`. The
built-in version: `.padStart(length, filler)` pads the
START of a string until it reaches the length:

```js
"7".padStart(2, "0")    // "07"
"12".padStart(2, "0")   // "12" (already long enough, untouched)
```

It's a STRING method, and your seconds arrive as a number. Put the
number through a template literal first (`` `${seconds}` ``), then
pad. Write `clockTime(minutes, seconds)` returning `"5:05"` style
times: minutes as-is, seconds always two digits.

## Examples

| When you call        | It returns |
| -------------------- | ---------- |
| `clockTime(5, 5)`    | `"5:05"`   |
| `clockTime(12, 30)`  | `"12:30"`  |
| `clockTime(0, 9)`    | `"0:09"`   |

## What the tests check

- pads single-digit seconds
- leaves double-digit seconds alone
- zero minutes with padded seconds

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

`` const padded = `${seconds}`.padStart(2, "0"); `` and then one more
template literal for the whole time.

</details>
