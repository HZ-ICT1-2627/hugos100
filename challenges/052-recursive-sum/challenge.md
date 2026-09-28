# 052: Recursive Sum 🧮

**Concept:** recursion on numbers · **Difficulty:** ★★★★☆

## Goal

Add up 1 through n without a single loop.

## Description

You've summed 1 to n with a loop back in 023. Second way: recursion.
The insight reads like a sentence: the sum up to n IS n plus the sum
up to n minus one.

```text
sumTo(4) = 4 + sumTo(3)
         = 4 + 3 + sumTo(2)
         = 4 + 3 + 2 + sumTo(1)
         = 4 + 3 + 2 + 1
```

`sumTo(1)` is the base case: plainly `1`, no self-call. Notice
something about the base case habit: it's a guard clause (043) that
answers the tiniest question directly. Same tool, new job.

## Examples

| When you call | It returns |
| ------------- | ---------- |
| `sumTo(4)`    | `10`       |
| `sumTo(1)`    | `1`        |
| `sumTo(100)`  | `5050`     |

## What the tests check

- sums up to 4
- the base case stands on its own
- Gauss's famous 5050 comes out
- no for, no while (we peek!)

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

Two lines after the guard: there is no second line.
`return n + sumTo(n - 1);`

</details>
