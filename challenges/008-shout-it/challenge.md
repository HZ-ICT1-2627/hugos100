# 008: Shout It 📢

**Concept:** string methods (`.toUpperCase()`) · **Difficulty:** ★★☆☆☆

## Goal

Turn a whisper into A SHOUT: capital letters, ending with `!`.

## Description

Strings come with built-in abilities, called **methods**. You use them with
a dot:

```js
"quiet words".toUpperCase()   // "QUIET WORDS"
"LOUD WORDS".toLowerCase()    // "loud words"
```

The parentheses matter. They mean "do it now".

Your function receives some text. Return that text in capital letters, with
an exclamation mark glued to the end.

## Examples

| When you call             | It returns        |
| ------------------------- | ----------------- |
| `shoutIt("i love pizza")` | `"I LOVE PIZZA!"` |
| `shoutIt("goal")`         | `"GOAL!"`         |

## What the tests check

- shouts "i love pizza"
- shouts "goal"

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

You can combine a method and `+` in one line: first make it uppercase, then
glue `"!"` on.

</details>

<details>
<summary>💡 Hint 2 (click to open)</summary>

`return text.toUpperCase() + "!";`

</details>
