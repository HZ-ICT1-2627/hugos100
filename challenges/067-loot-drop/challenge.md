# 067: Loot Drop 🗡️

**Concept:** a percentage chance · **Difficulty:** ★★★★☆

## Goal

Make a treasure chest that pays out exactly 30% of the time.

## Description

Every game has this moment: the chest creaks open and it's either
`"epic sword"` or, more often, `"dust"`. `openChest()` returns the
sword 30% of the time and dust the other 70%.

The tool is a comparison, not a formula. `Math.random()` is a
decimal from 0 up to (never quite) 1, spread evenly. So
`Math.random() < 0.3` is `true` in exactly 30% of calls: all the
random values from 0 up to 0.3 say yes, the rest say no. A weighted
coin in one line. Every drop rate, critical hit and gacha pull in
gaming runs on this comparison, tuned to whatever percentage keeps
players hooked.

## Examples

| When you call   | It returns                            |
| --------------- | ------------------------------------- |
| `openChest()`   | `"dust"`, most of the time            |
| `openChest()`   | `"epic sword"`, on the lucky third    |

## What the tests check

- 200 chests contain only swords or dust
- the sword actually drops
- dust actually happens
- dust is more common than swords

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

```js
if (Math.random() < 0.3) {
```

One if, two returns.

</details>
