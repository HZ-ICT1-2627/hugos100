# 077: Album Shelf 💿

**Concept:** arrays of objects · **Difficulty:** ★★★☆☆

## Goal

Grab the title of the first album on the shelf.

## Description

You know arrays. You know objects. Time to combine them: an array can
hold objects, and that combo is everywhere. A playlist is an array of
song objects, a class is an array of student objects, a shelf is an
array of album objects:

```js
let shelf = [
  { title: "Thriller", artist: "Michael Jackson" },
  { title: "Abbey Road", artist: "The Beatles" },
];
```

Reading from it is a chain you already know, one step at a time:
`shelf[0]` is the first object, so `shelf[0].title` is its title.

Your function gets an array of album objects (each has a `title` and an
`artist`). Return the title of the first album.

## Examples

| When you call                                                              | It returns    |
| -------------------------------------------------------------------------- | ------------- |
| `firstAlbumTitle([{ title: "Thriller", artist: "Michael Jackson" }, ...])` | `"Thriller"`  |

## What the tests check

- returns the title of the first album
- works when the shelf has only one album
- ignores the rest of the shelf

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

Read it left to right: `albums` is the array, `albums[0]` is the first
album object, `albums[0].title` is the string you need.

</details>
