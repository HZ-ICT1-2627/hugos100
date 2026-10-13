# 093: Throw a Fit 🤾

**Concept:** throwing your own errors · **Difficulty:** ★★★☆☆

## Goal

Your turn to throw: refuse a bank withdrawal that can't happen.

## Description

So far someone else's functions threw and you caught. Now you're on
the other side. `withdraw(balance, amount)` returns the new balance,
but withdrawing more than the balance is not a thing banks do:

```js
throw new Error("Not enough money.");
```

A `throw` ends the function instantly, like a `return`, except the
caller doesn't get a value: they get a problem to deal with. Compare
that to returning something like `-50` or `"error"`: those pretend to
be answers and quietly poison the code that trusts them. A throw
refuses to be ignored.

## Examples

| When you call         | It does                             |
| --------------------- | ----------------------------------- |
| `withdraw(100, 30)`   | returns `70`                        |
| `withdraw(50, 100)`   | throws `"Not enough money."`        |

## What the tests check

- a normal withdrawal returns the new balance
- withdrawing the exact balance is allowed (new balance 0)
- overdrawing throws, with that exact message

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

The throw goes in a guard clause at the top, exactly where a guard's
`return` would go (challenge 043 shape, sharper teeth).

</details>
