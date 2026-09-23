# 041: From Scratch 🛠️

**Concept:** writing a whole function yourself · **Difficulty:** ★★☆☆☆

## Goal

Write a complete function, from the `function` keyword to the closing `}`,
with no scaffold to lean on.

## Description

New unit, and a small graduation. For 40 days you've been filling in
function bodies we wrote for you. Time to take the training wheels off:
today's `solution.js` is (almost) empty.

The full anatomy of a function:

```js
function name(parameter) {
  return something;
}
```

Your task: write a function called **`doublePoints`** that takes one
parameter, `points`, and returns it multiplied by 2. The bonus round in
your favorite game just started.

Two things have to be exactly right or the test can't find your function:
the name `doublePoints` (capital P!) and the `module.exports` line, which
this time YOU write. It's in the starter file as a comment to copy.

## Examples

| When you call        | It returns |
| -------------------- | ---------- |
| `doublePoints(50)`   | `100`      |
| `doublePoints(7)`    | `14`       |

## What the tests check

- doubles 50 points
- doubles 7 points
- doubling 0 is still 0

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

Look at any previous challenge's solution.js if you forget the shape.
That's not cheating, that's how programmers work.

</details>

<details>
<summary>💡 Hint 2 (click to open)</summary>

If the test says "doublePoints is not a function", your `module.exports`
line is missing or the function name doesn't match exactly.

</details>
