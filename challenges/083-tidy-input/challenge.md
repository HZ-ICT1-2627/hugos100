# 083: Tidy Input 🧹

**Concept:** `.trim()` · **Difficulty:** ★★☆☆☆

## Goal

Clean up what people actually type into forms: spaces everywhere.

## Description

Users type `"  Mo  "` and expect to be treated like `"Mo"`. The
spaces are invisible on screen, but `===` sees every one of them.
`.trim()` returns the string with all whitespace cut off BOTH ends
(the middle is left alone).

Write `tidy(input)`: trim it, then lowercase it. That combination is
the standard first step for almost any user input, from usernames to
search boxes. Two methods, one chain.

## Examples

| When you call         | It returns   |
| --------------------- | ------------ |
| `tidy("  Mo  ")`      | `"mo"`       |
| `tidy("PIXEL ")`      | `"pixel"`    |
| `tidy("ice tea")`     | `"ice tea"`  |

## What the tests check

- cuts spaces from both ends
- lowercases while it's at it
- spaces in the MIDDLE survive

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

`return input.trim().toLowerCase();` (either order works; can you
reason out why?)

</details>
