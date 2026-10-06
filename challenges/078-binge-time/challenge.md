# 078: Binge Time 📺

**Concept:** looping over arrays of objects · **Difficulty:** ★★★☆☆

## Goal

Add up how many minutes a whole season takes to binge.

## Description

One album was easy. The next step is looping over a whole array of
objects. Inside the loop, `episodes[i]` is one episode object, so you
can grab any property from it:

```js
for (let i = 0; i < episodes.length; i++) {
  console.log(episodes[i].title);
}
```

Your function gets an array of episode objects. Each one has a `title`
and a `minutes` property. Return the total number of minutes in the
season. An empty season takes 0 minutes (lucky you, free evening).

This is the same sum pattern you used in 037: Total Score, only now the
numbers live inside objects.

## Examples

| When you call                                                                  | It returns |
| ------------------------------------------------------------------------------ | ---------- |
| `totalMinutes([{ title: "Pilot", minutes: 45 }, { title: "Two", minutes: 50 }])` | `95`     |
| `totalMinutes([])`                                                             | `0`        |

## What the tests check

- adds up a short season
- returns 0 for an empty season
- works for a season with one episode

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

Start a `total` at 0 before the loop. Inside the loop, add
`episodes[i].minutes` to it. Return `total` after the loop.

</details>
