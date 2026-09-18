# 031: Playlist Start 🎵

**Concept:** arrays and the first index `[0]` · **Difficulty:** ★★☆☆☆

## Goal

Return the first song of a playlist.

## Description

New unit! An **array** is a list of values in one variable:

```js
let snacks = ["chips", "popcorn", "nachos"];
```

You grab one item with square brackets and its position, called the
**index**. Here's the twist that trips everyone up once: **counting starts
at 0.**

```js
snacks[0]   // "chips"   (the FIRST item!)
snacks[1]   // "popcorn"
snacks[2]   // "nachos"
```

Your function receives a playlist (an array of song titles). Return the
song that plays first.

## Examples

| When you call                              | It returns   |
| ------------------------------------------ | ------------ |
| `firstSong(["Believer", "Thunder"])`       | `"Believer"` |
| `firstSong(["Levitating"])`                | `"Levitating"` |

## What the tests check

- the first of two songs
- the first of five songs
- a playlist with one song

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

The first item lives at index 0, not 1.

</details>
