# 091: First Catch 🥅

**Concept:** try / catch basics · **Difficulty:** ★★★☆☆

## Goal

Survive your first crashing function: catch the error and carry on.

## Description

Some functions don't return a wrong answer when things go bad. They
THROW: the function stops on the spot, and the error travels up until
something catches it (or your whole program dies with a red message).

The starter file has a finished function `launchRocket(fuel)`. With
enough fuel it returns `"Liftoff!"`; with less than 100 it throws.
Don't change it. Your job is `safeLaunch(fuel)`, which calls the
risky function inside a safety net:

```js
try {
  // code that might throw
} catch (error) {
  // runs ONLY if something threw
}
```

If the launch works, return its result. If it throws, return
`"Launch aborted."` instead of crashing.

## Examples

| When you call       | It returns          |
| ------------------- | ------------------- |
| `safeLaunch(150)`   | `"Liftoff!"`        |
| `safeLaunch(10)`    | `"Launch aborted."` |

## What the tests check

- a fueled rocket lifts off through safeLaunch
- an empty rocket returns the abort message instead of crashing
- launchRocket itself still throws (leave it as it is!)

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

```js
try {
  return launchRocket(fuel);
} catch (error) {
  return "Launch aborted.";
}
```

</details>
