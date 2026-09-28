# 054: Power Up ⚡

**Concept:** recursion with two parameters · **Difficulty:** ★★★★☆

## Goal

Compute powers the doll way: multiply once, recurse for the rest.

## Description

`power(base, exp)` raises a number to a power: `power(2, 3)` is
`2 * 2 * 2`, so `8`. No loops, and no `Math` tricks either. The doll
picture: `power(2, 3)` is just `2 * power(2, 2)`, which is
`2 * power(2, 1)`, which is `2 * power(2, 0)`.

- base case: any number to the power `0` is `1` (math says so, and
  it's the tiniest doll)
- recursive case: `base * power(base, exp - 1)`

New wrinkle since 053: TWO parameters, but only one of them shrinks.
`base` rides along unchanged in every call; `exp` counts down to the
base case. Every recursive function needs at least one thing that
shrinks, or the dolls never end.

## Examples

| When you call   | It returns |
| --------------- | ---------- |
| `power(2, 3)`   | `8`        |
| `power(5, 2)`   | `25`       |
| `power(7, 0)`   | `1`        |

## What the tests check

- two to the third is 8
- five squared is 25
- anything to the power zero is 1
- doubling ten times reaches 1024
- no for, no while (we peek!)

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

Same shape as 053, one extra passenger:

```js
if (exp === 0) {
  return 1;
}
return base * power(base, exp - 1);
```

</details>
