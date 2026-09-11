# 013: Game Over 💀

**Concept:** strict equality `===` · **Difficulty:** ★★☆☆☆

## Goal

Return `"Game over"` when lives are exactly 0, otherwise `"Keep playing"`.

## Description

How do you check whether two things are **exactly equal**? With three equals
signs:

```js
lives === 0    // true if lives is exactly 0
name === "Mo"  // true if name is exactly "Mo"
```

Why three? One `=` *puts* a value into a variable (`lives = 3`). Three `===`
*compares* without changing anything. Mixing them up is a classic bug. Even
professionals still do it sometimes.

> You may see `==` (two) in the wild. It does sloppy comparisons like
> `5 == "5"` being true. In this course we always use `===`. Trust us.

## Examples

| When you call | It returns      |
| ------------- | --------------- |
| `checkLives(0)` | `"Game over"`   |
| `checkLives(3)` | `"Keep playing"`|

## What the tests check

- 0 lives means game over
- 3 lives means keep playing
- even 1 life means keep playing

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

`if (lives === 0) { ... } else { ... }`

</details>
