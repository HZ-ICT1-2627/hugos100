# 024: Rocket Countdown 🚀

**Concept:** counting backwards · **Difficulty:** ★★☆☆☆

## Goal

Count down from a number to 1, then add "Liftoff!".

## Description

Loops can count down too. Just flip the three parts:

```js
for (let i = 3; i >= 1; i--) {
  // i is 3, then 2, then 1
}
```

Start high, keep going while `i >= 1`, and `i--` subtracts 1 each round
(the opposite of `i++`).

Mission control gives you the starting number. Build the countdown string:
every number followed by a space, and `Liftoff!` at the end.

## Examples

| When you call         | It returns               |
| --------------------- | ------------------------ |
| `rocketCountdown(5)`  | `"5 4 3 2 1 Liftoff!"`   |
| `rocketCountdown(3)`  | `"3 2 1 Liftoff!"`       |

## What the tests check

- counts down from 5
- counts down from 3
- even a countdown from 1 works

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

Build `"5 4 3 2 1 "` with the loop (just like challenge 022, but backwards),
then glue `"Liftoff!"` on after the loop.

</details>
