# 005: Introduce Yourself 🎤

**Concept:** template literals · **Difficulty:** ★★☆☆☆

## Goal

Build the sentence `Hi, I'm <name> and I'm <age> years old.` using a
template literal.

## Description

Glueing strings with `+` works, but it gets messy fast. JavaScript has a
nicer way: the **template literal**. Use backticks `` ` `` instead of quotes,
and drop variables straight into the text with `${...}`:

```js
let name = "Noa";
`Welcome back, ${name}!`   // "Welcome back, Noa!"
```

No more counting spaces: the text looks like the result.

> ⌨️ The backtick key is at the top-left of most keyboards, under Esc.

## Examples

| When you call          | It returns                          |
| ---------------------- | ----------------------------------- |
| `introduce("Noa", 19)` | `"Hi, I'm Noa and I'm 19 years old."` |
| `introduce("Liam", 21)`| `"Hi, I'm Liam and I'm 21 years old."` |

## What the tests check

- introduces Noa, who is 19
- introduces Liam, who is 21

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

Start from the example sentence and replace the changing parts with
`${name}` and `${age}`.

</details>

<details>
<summary>💡 Hint 2 (click to open)</summary>

``return `Hi, I'm ${name} and I'm ${age} years old.`;``

</details>
