# 095: Vending Machine 🥤

**Concept:** throw in one place, catch in another (unit boss!) · **Difficulty:** ★★★★★

## Goal

Wire up a vending machine: a strict core and a friendly front panel.

## Description

The try/catch boss. Two functions:

**`vend(coins, snack)`**, the strict core. The menu is fixed:
`chips` cost 2, `soda` costs 3. In this order:

1. unknown snack → throw `"Unknown snack."`
2. not enough coins → throw `"Not enough coins."`
3. otherwise → return `"Enjoy your chips!"` (with the real snack)

A lookup object with bracket notation (`prices[snack]`, the
`pet["age"]` trick from the objects unit) makes the menu check clean: an unknown snack's price comes back `undefined`.

**`safeVend(coins, snack)`**, the front panel. Calls `vend` in a
try/catch. Success passes through; a crash becomes
`"Sorry: Unknown snack."` (built from `error.message`).

The core never apologizes, the panel never judges. Every real
codebase you'll touch splits its errors this way.

## Examples

| When you call             | It returns                  |
| ------------------------- | --------------------------- |
| `safeVend(5, "soda")`     | `"Enjoy your soda!"`        |
| `safeVend(1, "chips")`    | `"Sorry: Not enough coins."`|
| `safeVend(5, "caviar")`   | `"Sorry: Unknown snack."`   |

## What the tests check

- enough coins buys a snack
- vend itself throws both messages (we test the core directly)
- safeVend translates both crashes into friendly messages
- exact change works

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

The menu: `const menu = { chips: 2, soda: 3 };` and then
`menu[snack] === undefined` spots the strangers.

</details>

<details>
<summary>💡 Hint 2 (click to open)</summary>

safeVend is the Blame the Message pattern with a different prefix.
You've written every line of this boss before, just not together.

</details>
