# 036: Roll Call 🏫

**Concept:** looping over an array · **Difficulty:** ★★★☆☆

## Goal

Greet every student in the class list, in one string.

## Description

Here it is: the moment loops and arrays meet. From today on, you'll
write this pattern more often than any other:

```js
for (let i = 0; i < names.length; i++) {
  // names[i] is the current item
}
```

Read it carefully, because two details differ from the loops you know:

- start at `0` (the first index!)
- keep going while `i < names.length` (NOT `<=`, because the last index is
  length minus 1)

The teacher is doing roll call. For each student, add `"Hi <name>! "` to
the result string, then return it.

## Examples

| When you call                  | It returns             |
| ------------------------------ | ---------------------- |
| `rollCall(["Mo", "Sara"])`     | `"Hi Mo! Hi Sara! "`   |
| `rollCall(["Liv"])`            | `"Hi Liv! "`           |

## What the tests check

- greets two students in order
- greets four students in order
- an empty classroom returns an empty string

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

Inside the loop, the current student is `names[i]`. Use it in a template
literal.

</details>

<details>
<summary>💡 Hint 2 (click to open)</summary>

If the test shows one greeting too few: check your `<` versus `<=`.
If it crashes or says "undefined": check whether you started at 0.

</details>
