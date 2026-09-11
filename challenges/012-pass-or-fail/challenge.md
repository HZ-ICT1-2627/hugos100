# 012: Pass or Fail 📊

**Concept:** `if` / `else` · **Difficulty:** ★☆☆☆☆

## Goal

Return `"Passed! 🎉"` for a grade of 5.5 or higher, otherwise `"Failed 😢"`.

## Description

Yesterday you used `if` plus a normal `return` below it. There's a clearer
way to say "otherwise": **`else`**.

```js
if (battery >= 20) {
  return "All good";
} else {
  return "Charge me!";
}
```

Exactly one of the two blocks runs. Never both, never neither.

In the Netherlands, grades go from 1 to 10, and **5.5 is the magic line**:
anything from 5.5 up is a pass. Write `passOrFail(grade)` accordingly.

## Examples

| When you call      | It returns     |
| ------------------ | -------------- |
| `passOrFail(8.2)`  | `"Passed! 🎉"` |
| `passOrFail(5.5)`  | `"Passed! 🎉"` |
| `passOrFail(5.4)`  | `"Failed 😢"`  |

## What the tests check

- an 8.2 passes
- exactly 5.5 passes (phew!)
- a 5.4 fails (ouch, so close)

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

Decimal numbers work in comparisons just like whole ones: `grade >= 5.5`.

</details>
