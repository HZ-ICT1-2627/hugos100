# 017: Pet Alarm 🐹

**Concept:** logical OR (`||`) · **Difficulty:** ★★☆☆☆

## Goal

Your pet needs attention if it's hungry **or** thirsty (or both!).

## Description

Yesterday: `&&` needs *both* to be true. Today: `||` (OR) needs **at least
one**:

```js
if (isRaining || isSnowing) {
  return "Stay inside";
}
```

`||` is true when the left is true, the right is true, or both are.
(The `|` symbol is usually Shift + the key next to Enter or left Shift.)

Return `"Take care of your pet! 🚨"` if `isHungry` OR `isThirsty` is true.
If neither: `"All good, pet is happy 🐹"`.

## Examples

| When you call            | It returns                    |
| ------------------------ | ----------------------------- |
| `petAlarm(true, false)`  | `"Take care of your pet! 🚨"` |
| `petAlarm(false, true)`  | `"Take care of your pet! 🚨"` |
| `petAlarm(false, false)` | `"All good, pet is happy 🐹"` |

## What the tests check

- hungry → alarm
- thirsty → alarm
- hungry AND thirsty → alarm
- neither → all good

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

One line covers the first three test cases: `if (isHungry || isThirsty)`.

</details>
