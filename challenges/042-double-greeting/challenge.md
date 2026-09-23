# 042: Double Greeting 👋

**Concept:** multiple parameters · **Difficulty:** ★★☆☆☆

## Goal

Build a greeting from a name AND a mood.

## Description

Functions can take as many parameters as they need, separated by commas.
The **order matters**: the first value lands in the first parameter, the
second in the second.

```js
function mix(color1, color2) { ... }
mix("blue", "yellow");   // color1 is "blue", color2 is "yellow"
```

Write `greet(name, mood)` from scratch (like yesterday, the file is yours).
It returns exactly:

```text
Hey <name>, you look <mood> today!
```

## Examples

| When you call             | It returns                          |
| ------------------------- | ----------------------------------- |
| `greet("Bo", "happy")`    | `"Hey Bo, you look happy today!"`   |
| `greet("Ade", "sleepy")`  | `"Hey Ade, you look sleepy today!"` |

## What the tests check

- greets a happy Bo
- greets a sleepy Ade
- the order of the parameters is name first, mood second

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

A template literal with two `${}` holes does the trick.

</details>
