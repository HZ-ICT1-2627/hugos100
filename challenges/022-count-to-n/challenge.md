# 022: Count to N 🔢

**Concept:** using the loop counter · **Difficulty:** ★★☆☆☆

## Goal

Build the string `"1 2 3 ... n "` by counting up.

## Description

Here's the loop's secret weapon: the counter `i` isn't just bookkeeping:
**you can use its value inside the loop.** Each round, `i` is a different
number. Glue it into a string and you're literally counting:

```js
let countdown = "";
for (let i = 1; i <= 3; i++) {
  countdown += i + " ";
}
// "1 2 3 "
```

Wait, that's the whole answer? Almost! Your function receives `n` and must
count from 1 **to n**, each number followed by one space. Make sure you
understand *why* it works before moving on: say each loop round out loud
("i is 1, so... i is 2, so...").

## Examples

| When you call | It returns    |
| ------------- | ------------- |
| `countTo(5)`  | `"1 2 3 4 5 "` |
| `countTo(2)`  | `"1 2 "`       |

## What the tests check

- counts to 5
- counts to 2
- counts to 1

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

The loop from the description counts to 3. What tiny change makes it count
to `n`?

</details>
