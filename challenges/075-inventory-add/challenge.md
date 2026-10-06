# 075: Inventory Add 🎒

**Concept:** an array living inside an object · **Difficulty:** ★★★☆☆

## Goal

Add loot to a game character's inventory.

## Description

A property can hold ANY value, and that includes an array. Your
function receives a `character` shaped like this:

```js
{ owner: "Mo", items: ["rope"] }
```

plus a new `item`. Push the item into the character's `items` array
and return the character.

The whole exercise is the chain `character.items`: first the dot gets
you to the array, then the array does what arrays do. Read
`character.items.push(item)` left to right and it's three things you
already know, holding hands.

## Examples

| When you call                                        | It returns                                    |
| ----------------------------------------------------- | --------------------------------------------- |
| `addToBag({ owner: "Mo", items: ["rope"] }, "torch")` | `{ owner: "Mo", items: ["rope", "torch"] }`   |

## What the tests check

- the new item lands at the end of the items array
- the owner stays the same
- works on an empty inventory

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

Two lines: `character.items.push(item);` then return the character.

</details>
