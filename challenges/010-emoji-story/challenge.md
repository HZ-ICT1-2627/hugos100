# 010: Emoji Story 🌱

**Concept:** building a string step by step · **Difficulty:** ★★☆☆☆

## Goal

Grow the string `🌱🌿🌳🍎` one emoji at a time, using `+=`.

## Description

Last challenge of the Variables unit, so let's combine what you know.

A very common pattern in programming: start with an **empty string** and
build it up piece by piece:

```js
let song = "";
song += "la";
song += "la";
// song is now "lala"
```

Tell the story of a growing apple tree. Start with an empty string called
`story`, then add these four emoji **one line at a time**, in this order:
`🌱` `🌿` `🌳` `🍎`. Then return the finished story.

(Yes, you could return the whole thing in one line. But next week this
build-it-up pattern meets *loops*, and suddenly it can build strings of
any size. Practice it now.)

> 💡 Copy the emoji straight from this file into your code.

## Examples

| When you call  | It returns   |
| -------------- | ------------ |
| `emojiStory()` | `"🌱🌿🌳🍎"` |

## What the tests check

- tells the whole story: 🌱🌿🌳🍎

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

Six lines: make the empty string, four `+=` lines, return.

</details>

<details>
<summary>💡 Hint 2 (click to open)</summary>

```js
let story = "";
story += "🌱";
story += "🌿";
story += "🌳";
story += "🍎";
return story;
```

</details>
