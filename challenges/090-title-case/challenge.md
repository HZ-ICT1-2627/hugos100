# 090: Title Case 🎩

**Concept:** split + slice + join (unit boss!) · **Difficulty:** ★★★★☆

## Goal

Capitalize Every Word, Like A Movie Poster Does.

## Description

The unit boss, and it leans on the `.split()` and `.join()` you
learned yesterday in 089. Turn a
lowercase sentence into Title Case: first letter of every word
capitalized.

The per-word recipe is the new part: `word[0].toUpperCase()` is the
capital, `word.slice(1)` is everything else (slice with one argument
runs to the end), glue them together. Then the day 089 pipeline
does the rest: `split(" ")` into words, a loop to send every word
through the recipe, `join(" ")` back together.

Input is all lowercase with single spaces, no edge-case drama.

## Examples

| When you call                       | It returns             |
| ----------------------------------- | ---------------------- |
| `titleCase("the big lebowski")`     | `"The Big Lebowski"`   |
| `titleCase("up")`                   | `"Up"`                 |

## What the tests check

- capitalizes every word of a title
- a one-word title works
- one-letter words survive the recipe

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

```js
const words = sentence.split(" ");
for (let i = 0; i < words.length; i++) {
  words[i] = words[i][0].toUpperCase() + words[i].slice(1);
}
return words.join(" ");
```

</details>
