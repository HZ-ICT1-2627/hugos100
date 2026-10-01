# 066: RPS Bot 🤖

**Concept:** random pick as a game opponent · **Difficulty:** ★★★☆☆

## Goal

Build a rock-paper-scissors opponent that nobody can read.

## Description

Back in 020 you wrote the referee: `playRps` could judge any match,
but somebody still had to make both moves. Today the machine plays.
`botMove()` returns `"rock"`, `"paper"` or `"scissors"`, each equally
likely.

This is yesterday's picker pointed at a tiny array: put the three
moves in an array, pick a random one. Fun fact your opponents won't
enjoy: humans are terrible at this game. We avoid repeating moves,
we panic after losing twice, we telegraph. `Math.random()` has no
tells, no favorite move and no pride. The best any human can do
against your bot is break even, eventually.

## Examples

| When you call | It returns                                |
| ------------- | ----------------------------------------- |
| `botMove()`   | `"rock"`, `"paper"` or `"scissors"`       |
| `botMove()`   | no pattern, that's the whole strategy     |

## What the tests check

- 200 moves are all legal rps moves
- all three moves show up over time
- the move comes back as a string

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

```js
const moves = ["rock", "paper", "scissors"];
```

Then the 065 index recipe with `moves.length`.

</details>
