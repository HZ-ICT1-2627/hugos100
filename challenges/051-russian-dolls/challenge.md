# 051: Russian Dolls 🪆

**Concept:** a function calling itself · **Difficulty:** ★★★★☆

## Goal

Write a countdown where the function does the looping BY CALLING ITSELF.

## Description

Brace yourself for the strangest idea in this whole library: a
function is allowed to call itself. That's called recursion, and it
works like Russian nesting dolls: each doll contains a slightly
smaller doll, until the tiniest one, which contains nothing.

Every recursive function has exactly two parts:

- the **base case**: the tiniest doll. A plain answer, no
  self-calling. Without it the function calls itself forever.
- the **recursive case**: solve a small piece, and hand the REST of
  the problem to yourself.

`countdown(n)` returns `"3 2 1 Liftoff!"` style strings:

- base case: `countdown(0)` returns `"Liftoff!"`
- recursive case: `n` plus a space, glued to `countdown(n - 1)`

Trace `countdown(2)` on paper: it returns `"2 " + countdown(1)`,
which returns `"1 " + countdown(0)`, which returns `"Liftoff!"`. Now
read the chain backwards and watch the string assemble itself.

## Examples

| When you call    | It returns           |
| ---------------- | -------------------- |
| `countdown(3)`   | `"3 2 1 Liftoff!"`   |
| `countdown(0)`   | `"Liftoff!"`         |

## What the tests check

- counts down from 3
- counts down from 1
- zero is instant liftoff
- no for, no while (we peek: the function loops by itself!)

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

```js
if (n === 0) {
  return "Liftoff!";
}
return `${n} ` + countdown(n - 1);
```

</details>
