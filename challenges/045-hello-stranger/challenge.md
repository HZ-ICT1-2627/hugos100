# 045: Hello Stranger 🕵️

**Concept:** default parameters · **Difficulty:** ★★★☆☆

## Goal

Greet people by name, or as "stranger" when no name is given.

## Description

What happens when someone calls your function *without* an argument? The
parameter becomes `undefined`, and your greeting turns into "Hello
undefined!". Awkward.

The fix is built into JavaScript: give the parameter a **default value**.

```js
function order(size = "medium") {
  return `One ${size} fries`;
}
order("large")   // "One large fries"
order()          // "One medium fries"
```

The default only kicks in when nothing is passed.

Write `welcome(name = "stranger")` that returns `"Hello <name>!"`.

## Examples

| When you call       | It returns           |
| ------------------- | -------------------- |
| `welcome("Noa")`    | `"Hello Noa!"`       |
| `welcome()`         | `"Hello stranger!"`  |

## What the tests check

- greets Noa by name
- greets a nameless visitor as stranger
- greets Sam by name

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

The `= "stranger"` goes in the parameter list, between the parentheses of
the function line. The body needs no `if` at all.

</details>
