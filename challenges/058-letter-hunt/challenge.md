# 058: Letter Hunt 🔎

**Concept:** recursion with a decision per step · **Difficulty:** ★★★★☆

## Goal

Count how often a letter appears in a word, one doll at a time.

## Description

`countLetter("banana", "a")` returns `3`. The recursive question:
does the FIRST letter match? Then the answer is 1 plus whatever the
rest of the word holds. No match? Then the answer is just whatever
the rest of the word holds.

Three branches this time, in this order:

- base case: an empty word contains the letter `0` times
- match case: `1 + countLetter(word.slice(1), letter)`
- no-match case: `countLetter(word.slice(1), letter)`

This is 040's counting pattern reborn: back then a loop added 1 when
a condition held. Now every call decides "do I add 1 or not?" and
delegates the rest. Same idea, new engine.

## Examples

| When you call                    | It returns |
| -------------------------------- | ---------- |
| `countLetter("banana", "a")`     | `3`        |
| `countLetter("mississippi", "s")`| `4`        |
| `countLetter("sky", "a")`        | `0`        |

## What the tests check

- counts the a's in banana
- counts the s's in mississippi
- a missing letter counts zero times
- a word of only that letter counts every one
- an empty word counts zero times
- no for, no while (we peek!)

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

```js
if (word.length === 0) {
  return 0;
}
if (word[0] === letter) {
  return 1 + countLetter(word.slice(1), letter);
}
return countLetter(word.slice(1), letter);
```

</details>
