# 046: Is It a Banger 🎧

**Concept:** functions that return booleans · **Difficulty:** ★★☆☆☆

## Goal

Return `true` if a song's rating makes it a banger, otherwise `false`.

## Description

Some functions don't return text or numbers but a simple yes or no:
`true` or `false`. By convention their names start with `is` or `has`, so
code using them reads like English:

```js
if (isWeekend(day)) { ... }
```

Write `isBanger(rating)`: a song with a rating of 8 or higher is a banger.

One style upgrade while you're here. You could write:

```js
if (rating >= 8) {
  return true;
} else {
  return false;
}
```

But `rating >= 8` already IS `true` or `false`. So you can return it
directly, in one line. Both versions pass the test. The short one will
earn you a nod from any programmer reading your code.

## Examples

| When you call    | It returns |
| ---------------- | ---------- |
| `isBanger(9)`    | `true`     |
| `isBanger(5)`    | `false`    |

## What the tests check

- a 9 is a banger
- a 5 is not a banger
- an 8 just makes the cut

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

The one-liner: `return rating >= 8;`

</details>
