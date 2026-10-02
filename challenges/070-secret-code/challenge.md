# 070: Secret Code 🔐

**Concept:** randomness in a loop (mini boss!) · **Difficulty:** ★★★★☆

## Goal

Generate a random numeric code of any length, like the ones texted to
you for logins.

## Description

`makeCode(length)` returns a STRING of random digits: `makeCode(4)`
might give `"8371"`, and the next call almost certainly something
else.

A string, not a number, and there's a real reason: codes can start
with 0, and the number `0371` would collapse to `371`. Phone numbers
and PIN codes are strings everywhere in software, for exactly this.

The build: the challenge 021 string-building loop, where each round
glues on one random digit (the dice recipe, sized 0 to 9, no
`+ 1`).

## Examples

| When you call   | It returns                       |
| --------------- | -------------------------------- |
| `makeCode(4)`   | something like `"8371"`          |
| `makeCode(1)`   | one digit, as a string           |

## What the tests check

- the code has exactly the asked length
- every character is a digit
- two long codes are (all but certainly) different
- the code is a string, even when it starts with 0

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

Inside the loop: `code += Math.floor(Math.random() * 10);` and yes,
gluing a number onto a string turns it into text. For once that
famous JavaScript quirk is doing you a favor.

</details>
