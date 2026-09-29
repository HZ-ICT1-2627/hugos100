# 055: Echo Fade 📢

**Concept:** recursion on strings · **Difficulty:** ★★★★☆

## Goal

Shout into the canyon and hear the word crumble away, letter by letter.

## Description

`fade("hey")` returns `"hey ey y"`: the word, then the word minus
its first letter, and so on down to the last lonely letter.

Recursion on a string shrinks the string instead of a number:
`word.slice(1)` is the word without its head, and that's what you
hand to yourself. The doll gets smaller by one letter per call.

- base case: a word of length 1 is just itself, no echo
- recursive case: the word, a space, then `fade` of the sliced word

## Examples

| When you call     | It returns        |
| ----------------- | ----------------- |
| `fade("hey")`     | `"hey ey y"`      |
| `fade("no")`      | `"no o"`          |
| `fade("x")`       | `"x"`             |

## What the tests check

- a three-letter word fades in three steps
- a two-letter word fades once
- a single letter doesn't echo

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

`if (word.length <= 1) { return word; }` then
`return word + " " + fade(word.slice(1));`

</details>
