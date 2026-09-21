# 034: Undo Photo 📸

**Concept:** `.pop()` · **Difficulty:** ★★☆☆☆

## Goal

Delete the most recent photo from the album and return the album.

## Description

`.push()` has an opposite: **`.pop()`** removes the LAST item from an
array:

```js
let stack = ["plate", "plate", "wobbly plate"];
stack.pop();
// stack is now ["plate", "plate"]
```

You took a photo with your eyes closed (again). The function receives an
`album`, an array of photo names. Remove the most recent photo (the last
one) and return the album that's left.

## Examples

| When you call                                | It returns              |
| -------------------------------------------- | ----------------------- |
| `undoPhoto(["beach", "sunset", "blurry"])`   | `["beach", "sunset"]`   |
| `undoPhoto(["oops"])`                        | `[]`                    |

## What the tests check

- removes the blurry photo at the end
- an album of one becomes an empty album
- the other photos stay in order

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

Just like yesterday: do the array operation first, then return the array.

</details>
