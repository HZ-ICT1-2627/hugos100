# 020: Rock Paper Scissors ✊✋✌️

**Concept:** multi-branch logic (unit boss!) · **Difficulty:** ★★★☆☆

## Goal

Given both players' choices, decide who wins.

## Description

Last challenge of the Conditionals unit: the boss fight.

You get two strings: `player1` and `player2`. Each is `"rock"`, `"paper"`,
or `"scissors"`. The eternal rules:

- rock beats scissors
- scissors beats paper
- paper beats rock

Return `"Player 1 wins!"`, `"Player 2 wins!"`, or `"It's a tie!"`.

This needs everything from this unit: `===`, `&&`, `||`, and `else if`.
There are several good solutions. One tip before you start: the tie check
is the easiest case. What's true about both choices then?

## Examples

| When you call                | It returns         |
| ---------------------------- | ------------------ |
| `playRps("rock", "scissors")`| `"Player 1 wins!"` |
| `playRps("rock", "paper")`   | `"Player 2 wins!"` |
| `playRps("rock", "rock")`    | `"It's a tie!"`    |

## What the tests check

- rock beats scissors
- scissors beats paper
- paper beats rock
- player 2 can win too
- same choice is a tie

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

Start with: `if (player1 === player2) { return "It's a tie!"; }`

</details>

<details>
<summary>💡 Hint 2 (click to open)</summary>

Then list the three ways player 1 wins, glued together with `||`:

```js
if (
  (player1 === "rock" && player2 === "scissors") ||
  (player1 === "scissors" && player2 === "paper") ||
  (player1 === "paper" && player2 === "rock")
) { ... }
```

Everything else? Player 2 wins.

</details>
