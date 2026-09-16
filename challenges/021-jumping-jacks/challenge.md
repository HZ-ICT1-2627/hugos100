# 021: Jumping Jacks 🤸

**Concept:** the `for` loop · **Difficulty:** ★★☆☆☆

## Goal

Repeat `jump! ` as many times as the coach says.

## Description

New unit: **loops**. They make the computer repeat things, which is what
computers love most. The famous `for` loop:

```js
for (let i = 1; i <= 3; i++) {
  // this block runs 3 times
}
```

Read the three parts between `(...)` as: **start** at `i = 1` → **keep
going** while `i <= 3` → **after each round** add 1 to `i` (`i++`).

Combine it with challenge 010's build-a-string pattern:

```js
let cheer = "";
for (let i = 1; i <= 3; i++) {
  cheer += "ha";
}
// cheer is now "hahaha"
```

The coach says how many jumping jacks. Return `"jump! "` repeated that many
times (yes, each one ends with a space, to keep it simple).

## Examples

| When you call     | It returns               |
| ----------------- | ------------------------ |
| `jumpingJacks(3)` | `"jump! jump! jump! "`   |
| `jumpingJacks(1)` | `"jump! "`               |

## What the tests check

- 3 jumping jacks
- 1 jumping jack
- 0 jumping jacks → empty string (lazy day)

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

Empty string, loop `times` times, `+=` inside, return after the loop.

</details>

<details>
<summary>💡 Hint 2 (click to open)</summary>

The 0 case needs no extra code: if the loop runs zero times, the string
just stays empty. Try it!

</details>
