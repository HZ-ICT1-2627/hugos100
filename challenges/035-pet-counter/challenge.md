# 035: Pet Counter 🐾

**Concept:** `.length` on arrays · **Difficulty:** ★★☆☆☆

## Goal

Return how many pets are in the list, plus a fitting message.

## Description

A quick one today, with a twist at the end. You run a pet sitting service
and want to know how busy the weekend will be.

Return a message in this exact shape, using the number of pets:

```text
You are watching 3 pets this weekend!
```

And the twist: if the list is empty (0 pets), return
`"A quiet weekend."` instead. You know everything you need: `.length`, an
`if`, and a template literal.

## Examples

| When you call                          | It returns                              |
| -------------------------------------- | --------------------------------------- |
| `petReport(["Rex", "Mimi", "Bubbles"])`| `"You are watching 3 pets this weekend!"` |
| `petReport([])`                        | `"A quiet weekend."`                    |

## What the tests check

- counts 3 pets
- counts 1 pet (yes, the message says "1 pets", we'll fix grammar another day)
- an empty list means a quiet weekend

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

Check `pets.length === 0` first, then handle the normal case.

</details>
