# 074: Plant Care 🪴

**Concept:** changing AND adding properties · **Difficulty:** ★★☆☆☆

## Goal

Water a plant object: it grows a little and remembers it was watered.

## Description

Your windowsill plant lives in an object with a `name` and a `height`
(in centimeters). Watering it does two things:

1. `height` goes up by 5 (it's a very grateful plant)
2. the plant gets a brand new property: `watered` set to `true`

That's one property CHANGED (challenge 072 style) and one property
ADDED (challenge 073 style), in the same function. Change the plant
you receive and return it.

## Examples

| When you call                                  | It returns                                     |
| ----------------------------------------------- | ---------------------------------------------- |
| `waterPlant({ name: "Fred", height: 20 })`      | `{ name: "Fred", height: 25, watered: true }`  |

## What the tests check

- the plant grows 5 cm
- the watered property appears and is true
- the plant's name survives the watering

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

Two short lines before the return: `plant.height += 5;` and
`plant.watered = true;`

</details>
