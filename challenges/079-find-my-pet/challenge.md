# 079: Find My Pet 🔍

**Concept:** searching an array of objects · **Difficulty:** ★★★☆☆

## Goal

Find a runaway pet in the shelter list by name.

## Description

Summing was one classic loop job. Searching is the other one: walk
through the array, and the moment you find what you're looking for,
`return` it right away. Returning from inside a loop stops the loop
instantly, which is exactly what you want. Why keep looking when you
already found Rex?

Your function gets an array of pet objects (each has a `name` and a
`sound`) and a name to look for. Return the WHOLE pet object whose name
matches. If no pet has that name, return `null` after the loop. `null`
is the JavaScript way of saying "nothing here", and it only counts as
"not found" if it comes after you checked every pet.

## Examples

| When you call                                                              | It returns                        |
| --------------------------------------------------------------------------- | --------------------------------- |
| `findPet([{ name: "Rex", sound: "Woof" }, { name: "Mia", sound: "Meow" }], "Mia")` | `{ name: "Mia", sound: "Meow" }` |
| `findPet([{ name: "Rex", sound: "Woof" }], "Goldie")`                       | `null`                            |

## What the tests check

- finds the pet with the matching name
- returns the whole pet object, not just the name
- returns null when the pet is not in the list

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

Inside the loop: `if (pets[i].name === name) { return pets[i]; }`

</details>

<details>
<summary>💡 Hint 2 (click to open)</summary>

The `return null;` goes AFTER the loop, not inside it. Inside the loop
it would give up after checking only the first pet.

</details>
