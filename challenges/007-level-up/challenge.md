# 007: Level Up ⬆️

**Concept:** updating a variable (`+=`) · **Difficulty:** ★★☆☆☆

## Goal

Add a 100 XP bonus to a player's score and return the new score.

## Description

Variables wouldn't be much fun if you couldn't *change* them. You finished a
level, so your score grows:

```js
let score = 250;
score = score + 100;   // score is now 350
```

Read that second line from right to left: "take the current score, add 100,
store the result back in score." Programmers write this so often that
there's a shortcut:

```js
score += 100;          // exactly the same thing
```

Use the shortcut in your solution. You'll use `+=` a *lot* in the coming
weeks.

## Examples

| When you call   | It returns |
| --------------- | ---------- |
| `levelUp(250)`  | `350`      |
| `levelUp(0)`    | `100`      |

## What the tests check

- 250 points + bonus → 350
- a brand new player (0 points) → 100

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

Two steps: first `score += 100;`, then return `score`.

</details>
