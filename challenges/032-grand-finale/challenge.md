# 032: Grand Finale 🎤

**Concept:** the last index (`.length - 1`) · **Difficulty:** ★★☆☆☆

## Goal

Return the last song of a playlist, no matter how long it is.

## Description

Arrays know how many items they hold: `playlist.length`, just like strings.
But here's a puzzle. In a playlist of 3 songs, the indexes are 0, 1 and 2.
So the *last* item is NOT at `playlist[playlist.length]` (that's index 3,
which doesn't exist). It's at:

```js
playlist[playlist.length - 1]
```

This "length minus one" move shows up in programs of every size, so
today is a good day to get comfortable with it.

## Examples

| When you call                                | It returns  |
| -------------------------------------------- | ----------- |
| `lastSong(["Believer", "Thunder", "Sharks"])`| `"Sharks"`  |
| `lastSong(["Levitating"])`                   | `"Levitating"` |

## What the tests check

- the last of three songs
- the last of six songs
- a playlist with one song (it's first AND last)

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

Don't count the songs yourself. Use `.length - 1` so it works for ANY
playlist the test throws at you.

</details>
