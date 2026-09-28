# 053: Factorial 🎲

**Concept:** the classic recursion exercise · **Difficulty:** ★★★★☆

## Goal

Compute n! (n factorial), the mathematician's favorite exclamation mark.

## Description

`5!` means `5 × 4 × 3 × 2 × 1 = 120`. It counts, among other things,
the number of orders you can play 5 songs in. Factorials are THE
textbook recursion example, in every CS course on the planet, so you
may as well meet it here first:

- base case: `factorial(0)` is `1` (math says so; the empty product
  is 1, the same way an empty sum is 0)
- recursive case: `n * factorial(n - 1)`

Same skeleton as Recursive Sum with `*` instead of `+` and a base
case one step lower. Factorials grow absurdly fast: 13! already
overflows what some languages can count. JavaScript numbers hold out
a bit longer.

## Examples

| When you call    | It returns |
| ---------------- | ---------- |
| `factorial(5)`   | `120`      |
| `factorial(0)`   | `1`        |
| `factorial(10)`  | `3628800`  |

## What the tests check

- 5! is 120
- 0! is 1 (the weird one)
- 1! is 1
- 10! is 3628800

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

`if (n === 0) { return 1; }` then `return n * factorial(n - 1);`

</details>
