# 028: Soda Pop 🥤

**Concept:** loop + conditionals together · **Difficulty:** ★★★☆☆

## Goal

Count up, but say "soda" on multiples of 3, "pop" on multiples of 5, and
"soda-pop" on both.

## Description

The drinking game from summer camp: go around the circle counting up, but...

- if the number is divisible by 3, say `soda`
- if it's divisible by 5, say `pop`
- if it's divisible by both, say `soda-pop`
- otherwise just say the number

Build the whole round up to `n` in one string, every word or number
followed by a space. Remember challenge 015: "divisible by 3" means
`i % 3 === 0`.

One thing to figure out yourself: in what order do you check the three
rules? Try it, run the test, and adjust. (This puzzle is a famous job
interview question. You're doing it in week three.)

## Examples

| When you call | It returns                                       |
| ------------- | ------------------------------------------------ |
| `sodaPop(7)`  | `"1 2 soda 4 pop soda 7 "`                       |
| `sodaPop(15)` | `"1 2 soda 4 pop soda 7 8 soda pop 11 soda 13 14 soda-pop "` |

## What the tests check

- a round up to 7
- a round up to 15 (the first soda-pop!)
- 3 itself is already a soda

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

Check "divisible by both" FIRST. If you check 3 first, the number 15 gets
"soda" and never reaches your soda-pop rule.

</details>

<details>
<summary>💡 Hint 2 (click to open)</summary>

"Divisible by both" can be one condition: `i % 3 === 0 && i % 5 === 0`.

</details>
