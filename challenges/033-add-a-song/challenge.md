# 033: Add a Song ➕

**Concept:** `.push()` · **Difficulty:** ★★☆☆☆

## Goal

Add a new song to the end of the playlist and return the playlist.

## Description

Arrays can grow. The `.push()` method adds an item to the end:

```js
let bag = ["wallet", "keys"];
bag.push("phone");
// bag is now ["wallet", "keys", "phone"]
```

Your function receives a `playlist` and a `newSong`. Push the song onto the
playlist, then return the playlist.

One new thing in the test file today: arrays are compared with
**`toEqual`** instead of `toBe`. Same idea ("should be exactly this"), but
`toEqual` knows how to look inside a list and compare every item.

## Examples

| When you call                          | It returns                      |
| -------------------------------------- | ------------------------------- |
| `addSong(["Believer"], "Thunder")`     | `["Believer", "Thunder"]`       |
| `addSong([], "Flowers")`               | `["Flowers"]`                   |

## What the tests check

- adds a song to a playlist of one
- adds a song to an empty playlist
- the new song goes at the END

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

Two lines: push first, then `return playlist;`

</details>
