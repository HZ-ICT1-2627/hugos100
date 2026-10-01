# 065: Random Picker 🎁

**Concept:** a random item from an array · **Difficulty:** ★★★☆☆

## Goal

Let the computer decide: who presents first, which movie, whose turn
to bring snacks.

## Description

The dice recipe, aimed at an array: a random INDEX is
`Math.floor(Math.random() * items.length)`. No `+ 1` this time,
because indexes start at 0 and stop at length minus 1, which is
exactly the range the recipe already produces. The recipe and arrays
were made for each other.

Write `pickOne(items)` returning one random item from the array
(assume it isn't empty).

## Examples

| When you call                    | It returns              |
| -------------------------------- | ----------------------- |
| `pickOne(["Mo", "Ana", "Liv"])`  | one of the three names  |
| `pickOne(["only me"])`           | `"only me"` every time  |

## What the tests check

- always returns something that's in the list
- a one-item list has no suspense
- over many picks, different items come up

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

`return items[Math.floor(Math.random() * items.length)];`

</details>
