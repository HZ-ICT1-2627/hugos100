# 019: Cinema Tickets 🍿

**Concept:** combining conditions · **Difficulty:** ★★★☆☆

## Goal

Return the right ticket price: kids, adults, and seniors pay differently.

## Description

The cinema's price list:

| Who                      | Price |
| ------------------------ | ----- |
| Children (under 12)      | `6`   |
| Adults (12 up to 64)     | `12`  |
| Seniors (65 and older)   | `8`   |

This is yesterday's `else if` chain plus careful border-thinking. No new
syntax, just a real puzzle. Sketch the three groups on paper first if it
helps. Which condition do you check first?

## Examples

| When you call      | It returns |
| ------------------ | ---------- |
| `ticketPrice(8)`   | `6`        |
| `ticketPrice(30)`  | `12`       |
| `ticketPrice(70)`  | `8`        |

## What the tests check

- children under 12 pay 6
- adults pay 12
- seniors (65 and older) pay 8
- exactly 12 counts as adult
- exactly 65 counts as senior

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

One clean order: first `age < 12`, then `age >= 65`, and `else` is the
adults. (Other orders work too, try yours!)

</details>

<details>
<summary>💡 Hint 2 (click to open)</summary>

If "exactly 12" fails: `age < 12` is false for 12, which is good, because 12 is an adult.
If "exactly 65" fails: should it be `> 65` or `>= 65`?

</details>
