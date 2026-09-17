# 025: Every Other Day 🏋️

**Concept:** loop steps (`i += 2`) · **Difficulty:** ★★★☆☆

## Goal

List the gym days of the month: day 2, day 4, day 6, and so on.

## Description

The last part of a `for` loop doesn't have to be `i++`. You can jump in any
step you like:

```js
for (let i = 0; i <= 100; i += 10) {
  // i is 0, 10, 20, ... 100
}
```

Your new workout plan says: gym on every even-numbered day of the month.
The function receives the last day of the month. Return all the gym days in
one string, each followed by a space.

## Examples

| When you call       | It returns        |
| ------------------- | ----------------- |
| `gymDays(7)`        | `"2 4 6 "`        |
| `gymDays(10)`       | `"2 4 6 8 10 "`   |

## What the tests check

- a 7-day plan has gym on 2, 4 and 6
- a 10-day plan has gym on 2, 4, 6, 8 and 10
- a 31-day month ends on day 30

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

Start the counter at 2 (the first gym day) and jump with `i += 2`.

</details>
