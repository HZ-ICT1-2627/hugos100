# 018: Quiz Checker ❓

**Concept:** comparing strings (any capitalization) · **Difficulty:** ★★☆☆☆

## Goal

Accept a quiz answer no matter HOW it's capitalized.

## Description

Quiz question: *What is the capital of France?* The answer is Paris, but
players type `"Paris"`, `"paris"`, `"PARIS"`, even `"pArIs"`. To a strict
`===`, those are all different strings!

The classic trick: make everything lowercase *before* comparing.

```js
"PARIS".toLowerCase() === "paris"   // true
```

Write `checkAnswer(answer)`: return `"Correct! ✅"` if the answer is paris
in any capitalization, otherwise `"Wrong ❌"`.

## Examples

| When you call           | It returns     |
| ----------------------- | -------------- |
| `checkAnswer("Paris")`  | `"Correct! ✅"` |
| `checkAnswer("PARIS")`  | `"Correct! ✅"` |
| `checkAnswer("London")` | `"Wrong ❌"`    |

## What the tests check

- "Paris" is correct
- "PARIS" is correct (caps lock players exist)
- "pArIs" is correct (chaos players exist too)
- "London" is wrong

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

Compare `answer.toLowerCase()` with `"paris"`.

</details>
