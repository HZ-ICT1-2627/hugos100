# 014: What to Wear 🧥

**Concept:** `else if` chains · **Difficulty:** ★★☆☆☆

## Goal

Pick the right clothing for the temperature: coat, sweater, or t-shirt.

## Description

Sometimes two choices aren't enough. Chain decisions with **`else if`**:

```js
if (speed > 100) {
  return "Way too fast";
} else if (speed > 50) {
  return "Too fast";
} else {
  return "Fine";
}
```

JavaScript checks the conditions **top to bottom** and runs only the *first*
one that's true. That order matters, so start with the most extreme case.

The dress code:

- colder than 10 degrees → `"Coat 🧥"`
- 10 up to (not including) 20 degrees → `"Sweater 🧶"`
- 20 degrees or more → `"T-shirt 👕"`

## Examples

| When you call    | It returns     |
| ---------------- | -------------- |
| `whatToWear(3)`  | `"Coat 🧥"`    |
| `whatToWear(15)` | `"Sweater 🧶"` |
| `whatToWear(25)` | `"T-shirt 👕"` |

## What the tests check

- 3 degrees → coat
- 15 degrees → sweater
- 25 degrees → t-shirt
- exactly 10 degrees → sweater (not coat!)
- exactly 20 degrees → t-shirt (not sweater!)

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

Check `< 10` first, then `< 20`, and let `else` handle the rest.

</details>

<details>
<summary>💡 Hint 2 (click to open)</summary>

The borders: 10 is NOT colder than 10, so 10 lands in the sweater group.
Same logic at 20.

</details>
