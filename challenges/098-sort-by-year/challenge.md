# 098: Sort by Year 🎬

**Concept:** sorting objects by a property · **Difficulty:** ★★★★☆

## Goal

Put the movie marathon in chronological order.

## Description

Real data is objects, and objects don't sort bare (what would "one
movie is less than another" even mean?). YOU decide, in the
comparator: reach into both objects and compare the property that
matters.

```js
movies.sort((a, b) => a.year - b.year)
```

Inside the comparator, `a` and `b` are two whole movie objects, and
you compare their years. Write `chronological(movies)` sorting movie
objects (`title`, `year`) from oldest to newest.

## Examples

| When you call (shortened)                       | It returns                     |
| --------------------------------------------------- | ------------------------------ |
| `chronological([Up (2009), Psycho (1960)])`          | `[Psycho (1960), Up (2009)]`   |

## What the tests check

- oldest movie first
- the whole objects survive the sorting
- three movies land in the right order

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

Same subtraction comparator as Sort the Scores, with `.year` bolted
onto both sides.

</details>
