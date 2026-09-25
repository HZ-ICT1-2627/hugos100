# 048: Arrow Academy 🏹

**Concept:** arrow function syntax · **Difficulty:** ★★★☆☆

## Goal

Write the same function in arrow style.

## Description

JavaScript has a second, shorter way to write functions, and you'll see it
everywhere (especially in unit 10, where sorting eats tiny
functions for breakfast). Same machine,
different packaging:

```js
// the way you know:
function double(n) {
  return n * 2;
}

// arrow style:
const double = (n) => {
  return n * 2;
};
```

Read the arrow version as: "double is a function that takes n and returns
n times 2". The `=>` is the arrow that gives it its name.

Your task: write `tripleScore` as an **arrow function**. It takes a score
and returns it times 3.

## Examples

| When you call      | It returns |
| ------------------ | ---------- |
| `tripleScore(10)`  | `30`       |
| `tripleScore(7)`   | `21`       |

## What the tests check

- triples 10
- triples 7
- tripleScore is written as an arrow function (we peek at your code!)

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

Copy the `double` example and adapt it. Don't forget the `;` after the
closing `}` (it's an assignment to a const, so it ends like one).

</details>
