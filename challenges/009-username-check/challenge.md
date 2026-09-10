# 009: Username Check 🔤

**Concept:** `.length` · **Difficulty:** ★★☆☆☆

## Goal

Return how many characters a username has.

## Description

You're building a sign-up form and need to know how long a username is.
Every string knows its own length:

```js
"abc".length        // 3
"hello world".length // 11  (the space counts too!)
```

Note: no parentheses this time. `.length` is a **property** (a fact about
the string), not a method (an action). You *ask* for a property; you *do* a
method.

## Examples

| When you call               | It returns |
| --------------------------- | ---------- |
| `usernameLength("Luka")`    | `4`        |
| `usernameLength("xX_gamer_Xx")` | `11`   |

## What the tests check

- "Luka" has 4 characters
- "xX_gamer_Xx" has 11 characters

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

`return username.length;` and remember: no parentheses after length!

</details>
