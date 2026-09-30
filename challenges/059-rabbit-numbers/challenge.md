# 059: Rabbit Numbers 🐰

**Concept:** recursion with TWO self-calls · **Difficulty:** ★★★★★

## Goal

Compute Fibonacci numbers the recursive way, and feel why it's famous
twice over.

## Description

The Fibonacci sequence (1, 1, 2, 3, 5, 8, 13...) adds its last two
numbers to make the next. Fibonacci himself described it in 1202
using immortal rabbits, hence the name. As recursion it's almost a
direct quote of the definition:

- base cases: `fib(1)` and `fib(2)` are both `1`
- recursive case: `fib(n - 1) + fib(n - 2)`

TWO self-calls in one return. The call fans out like a family tree.

Now the second lesson, and it's a big one: try `fib(30)` in a node
run. Notice the pause? The fan-out recomputes the same values
thousands of times over. A cure exists (a loop carrying the last two
values along), but that's not today's point. Elegant and efficient
are different axes. Today you buy elegance and pay in milliseconds.

## Examples

| When you call | It returns |
| ------------- | ---------- |
| `fib(2)`      | `1`        |
| `fib(6)`      | `8`        |
| `fib(10)`     | `55`       |

## What the tests check

- the first two rabbit numbers are 1
- the sixth is 8
- the tenth is 55

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

`if (n <= 2) { return 1; }` covers both base cases at once.

</details>
