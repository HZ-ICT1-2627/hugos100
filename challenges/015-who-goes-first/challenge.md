# 015: Who Goes First 🎲

**Concept:** the remainder operator `%` · **Difficulty:** ★★☆☆☆

## Goal

Roll even → `"Player 1 starts"`. Roll odd → `"Player 2 starts"`.

## Description

Meet the strangest math operator: `%`, the **remainder** (also called
modulo). `a % b` gives what's left over after dividing:

```js
7 % 2   // 1  (7 = 3×2, remainder 1)
8 % 2   // 0  (8 divides evenly)
9 % 5   // 4
```

Its most famous trick: **`number % 2` is `0` exactly when the number is
even.** That's how programmers check even/odd.

Board game night. Someone rolls a die (you get the number). Even roll:
player 1 starts. Odd roll: player 2 starts.

## Examples

| When you call   | It returns          |
| --------------- | ------------------- |
| `whoStarts(4)`  | `"Player 1 starts"` |
| `whoStarts(3)`  | `"Player 2 starts"` |

## What the tests check

- a roll of 4 (even) → player 1
- a roll of 3 (odd) → player 2
- a roll of 6 (even) → player 1

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

`if (roll % 2 === 0)` reads as: "if the remainder after dividing by 2 is zero".

</details>
