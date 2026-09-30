# 060: Mirror Check 🚓

**Concept:** recursion shrinking from both ends (mini boss!) · **Difficulty:** ★★★★★

## Goal

Palindrome Patrol rides again, recursive edition.

## Description

A palindrome reads the same backwards: kayak, level, racecar. You
could check one by reversing the whole word with a loop. The
recursive view is different and weirdly satisfying: a word is a
palindrome when its FIRST and LAST letters match, AND everything
between them is a palindrome too. The problem eats itself from both
ends inward.

- base case: a word of length 1 or 0 is a palindrome (`true`)
- mismatch case: first letter differs from last letter → `false`,
  no recursion needed
- recursive case: check the middle with
  `word.slice(1, -1)` (slice takes negative positions: `-1` means
  "stop one before the end")

Keep the input lowercase; capitals are somebody else's problem today.

## Examples

| When you call           | It returns |
| ----------------------- | ---------- |
| `isPalindrome("kayak")` | `true`     |
| `isPalindrome("pizza")` | `false`    |
| `isPalindrome("aa")`    | `true`     |

## What the tests check

- recognizes kayak
- rejects pizza
- two equal letters are a palindrome
- one letter is a palindrome
- letters must match at BOTH ends every layer down

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

Three returns in order: `true` for tiny words, `false` for a
first/last mismatch, and `isPalindrome(word.slice(1, -1))` for the
rest.

</details>
