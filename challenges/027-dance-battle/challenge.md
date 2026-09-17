# 027: Dance Battle 🕺

**Concept:** the `while` loop · **Difficulty:** ★★★☆☆

## Goal

Keep dancing while you have energy. Count how many moves you managed.

## Description

The `for` loop is great when you know how many rounds you need. But
sometimes you only know the *condition*: "keep going as long as...".
That's the **`while` loop**:

```js
while (battery > 0) {
  battery -= 25;
  // runs again and again, until battery is 0 or less
}
```

Careful: something inside the loop must change the condition, or the loop
never ends (and your test runs forever).

You're in a dance battle. Every move costs 10 energy, and you can only do a
move if you have at least 10 energy left. Count your moves and return the
number.

## Examples

| When you call      | It returns |
| ------------------ | ---------- |
| `danceBattle(35)`  | `3`        |
| `danceBattle(50)`  | `5`        |

## What the tests check

- 35 energy is enough for 3 moves
- 50 energy is enough for 5 moves
- 5 energy is not enough for a single move

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

Two variables: `moves` starts at 0. While `energy >= 10`, subtract 10 from
energy and add 1 to moves.

</details>
