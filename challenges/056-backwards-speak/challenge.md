# 056: Backwards Speak 🗣️

**Concept:** recursion builds a string in reverse · **Difficulty:** ★★★★☆

## Goal

Say any word backwards without a single loop.

## Description

`reverseWord("hello")` returns `"olleh"`. The recursive trick reads
almost like a riddle: a word backwards is the REST of the word
backwards, with the first letter moved to the end.

- base case: a word of length 1 or 0 is its own reverse
- recursive case: `reverseWord(word.slice(1)) + word[0]`

Note the order! In 055 you glued the word BEFORE the recursive call.
Here the first letter goes AFTER it, and that one swap reverses the
whole word. Trace `reverseWord("hey")` on paper if that feels like
magic (it does): `reverseWord("ey") + "h"`, which is
`reverseWord("y") + "e" + "h"`, which is `"y" + "e" + "h"`.

Bonus fact for your next long car ride: "stressed" backwards is
"desserts".

## Examples

| When you call            | It returns    |
| ------------------------ | ------------- |
| `reverseWord("hello")`   | `"olleh"`     |
| `reverseWord("a")`       | `"a"`         |

## What the tests check

- reverses a word
- stressed becomes desserts
- a single letter is its own reverse
- an empty string stays empty
- no for, no while (we peek!)

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

The base case first, then one line:

```js
return reverseWord(word.slice(1)) + word[0];
```

</details>
