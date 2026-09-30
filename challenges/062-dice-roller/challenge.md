# 062: Dice Roller 🎲

**Concept:** `Math.random()` scaled to a range · **Difficulty:** ★★★☆☆

## Goal

Roll a fair six-sided die in code.

## Description

`Math.random()` gives a random decimal from 0 up to (never quite
reaching) 1. Alone it's rarely what you want; the standard recipe
scales it into a range:

```js
Math.floor(Math.random() * 6) + 1
```

Read it inside out: random decimal, times 6 (now 0 to 5.999...),
`Math.floor` chops the decimals (now a whole 0 to 5), plus 1 (now
1 to 6). Every step matters; move the `+ 1` inside the floor and the
die grows a seventh side. Write `rollDie()` with it.

New testing situation: the tests can't know WHAT you'll roll, so
they roll 200 times and check properties: everything in range, whole
numbers only, and more than two different faces (a die that always
lands on 4 is not a die, it's a paperweight).

## Examples

| When you call | It returns                        |
| ------------- | --------------------------------- |
| `rollDie()`   | a whole number from 1 to 6        |
| `rollDie()`   | possibly a different one, that's the point |

## What the tests check

- 200 rolls all land between 1 and 6
- every roll is a whole number
- the die shows variety (no paperweights)

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

The recipe from the description is the whole function body, behind a
`return`.

</details>
