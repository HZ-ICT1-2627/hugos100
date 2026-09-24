# 047: Chat Filter 💬

**Concept:** reusing your own helper in a loop · **Difficulty:** ★★★☆☆

## Goal

Censor banned words in a chat, using a helper function you write yourself.

## Description

Your game's chat needs a filter. You'll build it in two layers, and the
layering is the actual lesson today.

**Layer 1, the helper:** `censorWord(word, bannedWord)` returns `"****"`
if the word equals the banned word, otherwise the word itself.

**Layer 2, the filter:** `filterChat(words, bannedWord)` gets an array of
words. It loops over them, runs **every word through your helper**, and
builds the cleaned-up sentence (words separated by spaces, with a space
after each word).

Layer 2 should NOT contain its own banned-word check. Deciding about one
word is the helper's job. Each function does one thing.

## Examples

| When you call                              | It returns        |
| ------------------------------------------ | ----------------- |
| `censorWord("noob", "noob")`               | `"****"`          |
| `censorWord("hi", "noob")`                 | `"hi"`            |
| `filterChat(["gg", "noob"], "noob")`       | `"gg **** "`      |

## What the tests check

- the helper censors the banned word
- the helper lets normal words through
- the filter cleans a whole chat message
- a chat with no banned words survives untouched

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

Inside the loop of filterChat:
`message += censorWord(words[i], bannedWord) + " ";`

</details>
