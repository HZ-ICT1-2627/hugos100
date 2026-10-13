# 096: Sort the Scores 🔢

**Concept:** `.sort()` with a comparator · **Difficulty:** ★★★☆☆

## Goal

Sort numbers from small to large, and dodge JavaScript's most famous trap.

## Description

Arrays have a `.sort()` method. Call it bare on numbers and you get
this:

```js
[10, 9, 100].sort()   // [10, 100, 9] ...wait, WHAT?
```

Bare sort compares everything AS TEXT, and as text `"100"` comes
before `"9"` (it starts with a smaller character). Every JavaScript
developer gets bitten by this exactly once. This is your once.

The fix: give sort a COMPARATOR. That's a whole function handed over
as input (arrow style, straight from 048): it takes two items and
returns a negative number if the first should come first, positive if
the second should. For numbers ascending, subtraction does it:

```js
scores.sort((a, b) => a - b)
```

Write `sortScores(scores)` returning the scores small to large. Note:
sort rearranges the array itself AND returns it. Today that's fine;
just know it's not a copy.

## Examples

| When you call                | It returns        |
| ---------------------------- | ----------------- |
| `sortScores([30, 10, 20])`   | `[10, 20, 30]`    |
| `sortScores([10, 9, 100])`   | `[9, 10, 100]`    |

## What the tests check

- sorts a small list
- survives the 9 vs 100 trap
- an already sorted list stays sorted

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

Why does `a - b` work? If `a` is 9 and `b` is 100, the result is
negative, which tells sort "a goes first". That's the whole contract.

</details>
