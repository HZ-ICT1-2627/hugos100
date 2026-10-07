# 082: Echo Chamber 🔁

**Concept:** `.repeat()` · **Difficulty:** ★★☆☆☆

## Goal

Laugh harder with less code: repeat a string n times, no loop needed.

## Description

Back in the loops unit you built repeated strings by hand. Strings
have a shortcut: `.repeat(n)` glues n copies together:

```js
"na".repeat(4) + " Batman!"   // "nananana Batman!"
```

Write `laugh(intensity)`: `"ha"` repeated that many times, with an
`"!"` at the end. An intensity of 0 is a deadpan `"!"`, which is
correct behavior for some jokes.

## Examples

| When you call | It returns    |
| ------------- | ------------- |
| `laugh(3)`    | `"hahaha!"`   |
| `laugh(1)`    | `"ha!"`       |
| `laugh(0)`    | `"!"`         |

## What the tests check

- a triple laugh
- a single laugh
- intensity 0 is just the exclamation mark

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

`return "ha".repeat(intensity) + "!";`

</details>
