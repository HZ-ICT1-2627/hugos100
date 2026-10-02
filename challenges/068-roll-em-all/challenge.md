# 068: Roll 'Em All 📦

**Concept:** randomness inside a loop · **Difficulty:** ★★★★☆

## Goal

Roll a whole handful of dice at once and keep every result.

## Description

Yahtzee needs five dice, your D&D fireball wants eight.
`rollMany(count)` rolls `count` six-sided dice and returns ALL the
results in an array: `rollMany(3)` might give `[4, 1, 6]`.

The build is two old friends shaking hands: the collect-loop from
unit 4 (make an empty array, `push` inside a loop) and the dice
recipe from 062. Each round of the loop rolls one fresh die and
pushes it. Fresh matters: the recipe runs anew every round, so every
die gets its own luck. Roll once and push the same value `count`
times and you've built a very suspicious set of dice.

## Examples

| When you call  | It returns                      |
| -------------- | ------------------------------- |
| `rollMany(3)`  | something like `[4, 1, 6]`      |
| `rollMany(0)`  | `[]`, zero dice roll nothing    |

## What the tests check

- rolls exactly as many dice as asked
- every die lands between 1 and 6
- the dice don't all copy each other
- zero dice returns an empty array

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

```js
const rolls = [];
for (let i = 0; i < count; i++) {
  // one fresh roll, one push
}
return rolls;
```

</details>
