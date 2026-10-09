# 088: Find the At 📧

**Concept:** `.indexOf()` + `.slice()` together · **Difficulty:** ★★★★☆

## Goal

Pull the domain out of any email address.

## Description

`"mo@school.nl"`: everything after the `@` is the domain, and you
don't know in advance WHERE the `@` is. That's the job for
`.indexOf()`: it returns the position of the first match:

```js
"mo@school.nl".indexOf("@")   // 2
```

Then `.slice(start)` with ONE argument cuts from that position to
the end of the string. Combine them, mind the off-by-one (you want
the part AFTER the @, not including it), and `getDomain` is two
short lines. Or one, if you're feeling smug.

## Examples

| When you call                    | It returns    |
| -------------------------------- | ------------- |
| `getDomain("mo@school.nl")`      | `"school.nl"` |
| `getDomain("a.lange@hz.nl")`     | `"hz.nl"`     |

## What the tests check

- extracts a short domain
- works when the name part contains a dot
- works for a one-letter name

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

`return email.slice(email.indexOf("@") + 1);` The `+ 1` skips the @
itself.

</details>
