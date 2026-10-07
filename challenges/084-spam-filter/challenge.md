# 084: Spam Filter 🚫

**Concept:** `.includes()` on strings · **Difficulty:** ★★★☆☆

## Goal

Catch the "FREE MONEY" messages before they reach the group chat.

## Description

`.includes()` is back. In 039 it asked "is this item in the array?";
on strings it asks "is this text anywhere in there?". Same name,
same yes/no answer:

```js
"win free money now".includes("free money")   // true
```

`isSpam(message)` returns `true` when the message contains
`"free money"` or `"you won"`, and `false` for honest messages.

One catch: spammers love CAPS LOCK, and `.includes()` is
case-sensitive. `"FREE MONEY"` does not contain `"free money"` as
far as JavaScript cares. Lowercase the whole message first (008
trained you for this exact moment) and check the lowercased version.

## Examples

| When you call                          | It returns |
| -------------------------------------- | ---------- |
| `isSpam("click for free money")`       | `true`     |
| `isSpam("CONGRATS YOU WON A PRIZE")`   | `true`     |
| `isSpam("lunch at twelve?")`           | `false`    |

## What the tests check

- catches a free money message
- catches a you won message
- shouting spammers don't slip through
- normal messages pass the filter

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

```js
const lower = message.toLowerCase();
```

Then one `return` with two `.includes()` checks and an `||`.

</details>
