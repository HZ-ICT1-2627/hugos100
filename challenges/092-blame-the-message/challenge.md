# 092: Blame the Message 📩

**Concept:** the error object and `.message` · **Difficulty:** ★★★☆☆

## Goal

Don't just catch the error. Read what it has to say.

## Description

That `error` between the catch parentheses is a real object, and its
most useful property is `error.message`: the text that was given to
`new Error("...")` at the throw site. Different problems, different
messages, one catch.

The starter's finished `readDiary(page)` throws two DIFFERENT errors
(page 13 is glued shut, pages past 30 are blank) and returns an entry
for normal pages. Write `tryRead(page)`: pass a good result through
unchanged, and turn any crash into:

```text
Problem: Page 13 is glued shut.
```

Built from `error.message`, so BOTH failure kinds get the right text
without you checking which one it was. That's the point of messages.

## Examples

| When you call   | It returns                           |
| --------------- | ------------------------------------ |
| `tryRead(5)`    | `"Dear diary, day 5 was fine."`      |
| `tryRead(13)`   | `"Problem: Page 13 is glued shut."`  |
| `tryRead(99)`   | `"Problem: That page is blank."`     |

## What the tests check

- a normal page reads fine
- the glued page reports its own message
- a blank page reports its own message

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

The catch block is one line: `` return `Problem: ${error.message}`; ``

</details>
