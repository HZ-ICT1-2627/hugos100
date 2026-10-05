# 071: Meet My Pet 🐢

**Concept:** object basics + dot access · **Difficulty:** ★★☆☆☆

## Goal

Create a pet object and return its name.

## Description

New unit! An **object** bundles related facts into one value, as
`property: value` pairs:

```js
let movie = {
  title: "Inside Out",
  year: 2015,
  rating: 8.1,
};
```

You read one fact with a dot: `movie.title` is `"Inside Out"`,
`movie.year` is `2015`. Where an array is a numbered list, an object is a
labeled box: you ask for things by NAME.

Today, two steps in one function:

1. Create a `pet` object with exactly these properties: `name` is
   `"Shelly"`, `kind` is `"turtle"`, and `age` is `4`.
2. Return the pet's name, using the dot.

## Examples

| When you call  | It returns  |
| -------------- | ----------- |
| `meetMyPet()`  | `"Shelly"`  |

## What the tests check

- returns the name Shelly, read from your object

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

Copy the movie example's shape, change the property names and values, and
finish with `return pet.name;`

</details>
