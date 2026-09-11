# 011: Movie Night 🎬

**Concept:** `if` + comparing numbers · **Difficulty:** ★☆☆☆☆

## Goal

Decide whether someone is old enough for a 13+ movie.

## Description

New unit! Your code can now make **decisions** with `if`:

```js
if (temperature > 30) {
  return "Tropical day!";
}
return "Normal day.";
```

If the condition between `(...)` is true, the code inside `{...}` runs.
If not, it's skipped and the code below runs instead.

The comparisons: `>` greater, `<` smaller, `>=` greater-or-equal,
`<=` smaller-or-equal.

Tonight's movie is rated 13+. Return `"Enjoy the movie!"` if the age is 13
or higher, otherwise return `"Sorry, too young."`

## Examples

| When you call    | It returns           |
| ---------------- | -------------------- |
| `canWatch(15)`   | `"Enjoy the movie!"` |
| `canWatch(13)`   | `"Enjoy the movie!"` |
| `canWatch(11)`   | `"Sorry, too young."`|

## What the tests check

- 15-year-olds can watch
- exactly 13 is old enough too
- 11-year-olds cannot watch

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

"13 or higher": which comparison includes 13 itself, `>` or `>=`?

</details>
