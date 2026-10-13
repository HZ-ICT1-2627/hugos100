# 094: JSON Parachute 🪂

**Concept:** catching a built-in thrower · **Difficulty:** ★★★★☆

## Goal

Parse data from the outside world without letting it crash you.

## Description

Meet `JSON.parse`, a built-in you'll use for the rest of your
programming life. JSON is the text format the internet ships data in,
and `JSON.parse` turns such text into a real object or array:

```js
JSON.parse('{"name":"Mo","level":3}')   // { name: "Mo", level: 3 }
```

The catch (pun fully intended): feed it broken text and it THROWS.
And text from the outside world (users, files, other people's
servers) is broken constantly. This is the single most caught error
in JavaScript.

Write `parseSafely(text)`: return the parsed result, or `null` when
the text wasn't valid JSON.

## Examples

| When you call                          | It returns            |
| --------------------------------------- | --------------------- |
| `parseSafely('{"name":"Mo"}')`          | `{ name: "Mo" }`      |
| `parseSafely("[1, 2, 3]")`              | `[1, 2, 3]`           |
| `parseSafely("not json at all {{")`     | `null`                |

## What the tests check

- parses a valid object
- parses a valid array
- broken text becomes null instead of a crash

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

Same safety-net shape as 091, with `JSON.parse(text)` in the try and
`null` in the catch.

</details>
