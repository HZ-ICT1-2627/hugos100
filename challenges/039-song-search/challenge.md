# 039: Song Search 🔍

**Concept:** `.includes()` · **Difficulty:** ★★★☆☆

## Goal

Check whether a song is already in the playlist.

## Description

Your friend keeps requesting songs that are already in the queue. Arrays
have a built-in detective for this: **`.includes()`** returns `true` or
`false`:

```js
let fridge = ["milk", "cheese"];
fridge.includes("milk")    // true
fridge.includes("pizza")   // false
```

Return `"Already in the queue!"` if the song is in the playlist, and
`"Added to the queue!"` if it's not.

By the way: you could solve this with a loop and an `if` (and you could
build `.includes` yourself now!). The built-in just saves you the work.
That's a theme for the rest of the course.

## Examples

| When you call                                  | It returns               |
| ---------------------------------------------- | ------------------------ |
| `requestSong(["Believer", "Sharks"], "Sharks")`| `"Already in the queue!"`|
| `requestSong(["Believer"], "Flowers")`         | `"Added to the queue!"`  |

## What the tests check

- spots a song that's already queued
- accepts a new song
- the match must be exact ("sharks" is not "Sharks")

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

`.includes(...)` already gives a boolean, so it can go straight inside
`if (...)`.

</details>
