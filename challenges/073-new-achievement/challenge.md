# 073: New Achievement 🏅

**Concept:** adding properties · **Difficulty:** ★★★☆☆

## Goal

Give a player a brand new `achievement` property.

## Description

Here's something arrays can't do: you can bolt a NEW property onto an
object at any time, just by assigning to it.

```js
let sandwich = { bread: "white" };
sandwich.cheese = "extra";
// sandwich is now { bread: "white", cheese: "extra" }
```

If the property doesn't exist yet, JavaScript creates it on the spot.

The function receives a `player` object and an `achievement` (a string,
like `"first win"`). Add it to the player under the property name
`achievement`, and return the player.

## Examples

| When you call                                  | It returns                                       |
| ---------------------------------------------- | ------------------------------------------------ |
| `unlock({ name: "Bo" }, "first win")`          | `{ name: "Bo", achievement: "first win" }`       |

## What the tests check

- Bo unlocks "first win"
- Sam unlocks "speedrun" without losing his score
- the achievement lands under the property name "achievement"

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

Careful with the two names: `achievement` the PARAMETER holds the text,
`player.achievement` the PROPERTY is where it goes.
`player.achievement = achievement;` is a perfectly normal line.

</details>
