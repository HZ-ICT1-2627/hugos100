# 080: Character Creator 🧙

**Concept:** factory functions · **Difficulty:** ★★★☆☆

## Goal

Build a character factory for a brand new RPG.

## Description

So far you have built objects one at a time, by hand. A real game needs hundreds of
characters, and nobody types those out one by one. Instead you write a
function that builds objects to order: pass in what makes this character
unique, and the function fills in the rest. Functions like that are
called **factory functions**.

Your `createCharacter` function takes a `name` and a `role` and returns
a fresh character object with four properties:

- `name`: whatever was passed in
- `role`: whatever was passed in
- `level`: always starts at `1`
- `hp`: always starts at `100`

Everyone starts at the bottom, even wizards.

## Examples

| When you call                       | It returns                                              |
| ----------------------------------- | ------------------------------------------------------- |
| `createCharacter("Zelda", "wizard")` | `{ name: "Zelda", role: "wizard", level: 1, hp: 100 }`  |
| `createCharacter("Bram", "knight")`  | `{ name: "Bram", role: "knight", level: 1, hp: 100 }`   |

## What the tests check

- builds a wizard
- builds a completely different character
- every new character starts at level 1 with 100 hp

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

Return an object literal where two properties come from the parameters
and two are fixed numbers: `return { name: name, role: role, level: 1, hp: 100 };`

</details>
