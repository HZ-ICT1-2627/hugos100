# 063: Double Dice 🎲

**Concept:** combining two random rolls · **Difficulty:** ★★★☆☆

## Goal

Roll two dice and return their total, board-game style.

## Description

Monopoly, Catan, backgammon: two dice, one total. `rollTwo()` rolls
two six-sided dice and returns the sum, so always a whole number
from 2 to 12.

The clean build is the 062 recipe used twice: roll one die, roll
another die, add them. Resist the shortcut
`Math.floor(Math.random() * 11) + 2`; it produces the right RANGE
but the wrong GAME. Real double dice hit 7 six ways (1+6, 2+5,
3+4...) and 2 only one way (1+1). One big fake roll makes snake eyes
as common as seven, and any board-gamer will feel it.

## Examples

| When you call | It returns                    |
| ------------- | ----------------------------- |
| `rollTwo()`   | a whole number from 2 to 12   |
| `rollTwo()`   | 7-ish more often than 2-ish   |

## What the tests check

- 200 rolls all land between 2 and 12
- every total is a whole number
- the totals show variety

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

Two constants and a plus:

```js
const first = Math.floor(Math.random() * 6) + 1;
const second = Math.floor(Math.random() * 6) + 1;
```

</details>
