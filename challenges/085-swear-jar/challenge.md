# 085: Swear Jar 🫙

**Concept:** `.replaceAll()` · **Difficulty:** ★★☆☆☆

## Goal

Beep out a word everywhere it appears in a sentence.

## Description

In challenge 047 you censored a chat by looping an array of words
through a helper. Strings can do it directly: `.replaceAll(old, new)`
returns a new string with EVERY occurrence swapped:

```js
"bad dog! bad!".replaceAll("bad", "good")   // "good dog! good!"
```

Write `beepOut(sentence, word)`: every occurrence of the word becomes
`"BEEP"`. Careful, there's also a `.replace()` (no All) that only
fixes the FIRST occurrence and leaves the rest standing. One of the
tests exists purely to catch that mix-up.

## Examples

| When you call                            | It returns              |
| ----------------------------------------- | ----------------------- |
| `beepOut("what the duck", "duck")`        | `"what the BEEP"`       |
| `beepOut("duck this duck", "duck")`       | `"BEEP this BEEP"`      |

## What the tests check

- beeps a single occurrence
- beeps EVERY occurrence (replace vs replaceAll!)
- a clean sentence stays untouched

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

`return sentence.replaceAll(word, "BEEP");`

</details>
