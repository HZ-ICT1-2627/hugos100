# 029: Piggy Bank 🐷

**Concept:** loop + `if` + a running total · **Difficulty:** ★★★☆☆

## Goal

Add up your savings: on even-numbered days you save that day's number in
euros, on odd days you save nothing.

## Description

Your savings plan is a little strange but it works: on day 2 you put 2
euros in the piggy bank, on day 4 you put in 4 euros, on day 6 you put in
6 euros... and on odd days you buy snacks instead and save nothing.

The function receives how many days the plan runs. Return the total amount
saved. This combines three things you know: a loop over the days, an `if`
with `%` to spot even days, and a running total.

## Examples

| When you call    | It returns |
| ---------------- | ---------- |
| `piggyBank(6)`   | `12`       |
| `piggyBank(7)`   | `12`       |
| `piggyBank(10)`  | `30`       |

## What the tests check

- 6 days of saving → 12 euros (2 + 4 + 6)
- day 7 adds nothing (odd days are snack days)
- 10 days of saving → 30 euros

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

Inside the loop: `if (i % 2 === 0) { total += i; }` and nothing else.

</details>
