# 076: Movie Card 🎬

**Concept:** objects as parameters · **Difficulty:** ★★★☆☆

## Goal

Turn a movie object into a one-line movie card.

## Description

Objects travel into functions like any other value. The function receives
the whole object and picks out what it needs:

```js
function shoutName(person) {
  return person.name.toUpperCase();
}
```

Your function gets a `movie` object that always has `title`, `year` and
`rating` properties. Return a card in exactly this shape:

```text
Inside Out (2015) ★8.1
```

That star is a real character. Copy it from here: ★

## Examples

| When you call                                                  | It returns                  |
| -------------------------------------------------------------- | --------------------------- |
| `movieCard({ title: "Inside Out", year: 2015, rating: 8.1 })`  | `"Inside Out (2015) ★8.1"`  |

## What the tests check

- makes a card for Inside Out
- makes a card for a different movie
- the shape is exact: parentheses, spaces, star

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

One template literal with three holes: `${movie.title}`, `${movie.year}`,
`${movie.rating}`.

</details>
