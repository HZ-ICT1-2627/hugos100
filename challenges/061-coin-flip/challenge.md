# 061: Coin Flip 🪙

**Concept:** random yes/no decisions · **Difficulty:** ★★★☆☆

## Goal

Flip a fair coin: heads or tails, fifty-fifty.

## Description

New unit, new tool: `Math.random()`. Every call returns a random
decimal from 0 up to (never quite reaching) 1, evenly spread, no
pattern. Every dice roll, loot drop and shuffled playlist in software
starts from this one function; this unit is about aiming it.

The simplest aim is a fair coin. The decimals land below 0.5 half
the time, so one comparison decides the flip:

```js
Math.random() < 0.5
```

Write `flip()` returning `"heads"` when that's true, `"tails"`
otherwise.

About the tests: they can't know how your coin will land, so they
flip it 200 times and check properties instead (only real sides come
up, and both sides show). Tomorrow's challenge says more about
testing functions that never answer the same twice.

## Examples

| When you call | It returns              |
| ------------- | ----------------------- |
| `flip()`      | `"heads"` or `"tails"`  |

## What the tests check

- 200 flips produce only heads and tails
- both sides of the coin actually come up

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

An if/else on the comparison. Four lines, two of them returns.

</details>
