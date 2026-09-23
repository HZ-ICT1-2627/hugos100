# 043: Ride Check 🎢

**Concept:** early returns (guard clauses) · **Difficulty:** ★★★☆☆

## Goal

Stop people at the rollercoaster gate the moment something is wrong.

## Description

A `return` ends the function *immediately*. Nothing below it runs. You can
use that to handle problems first and leave the happy path clean at the
bottom:

```js
function enterClub(age) {
  if (age < 18) {
    return "No entry.";     // too young? we're done here
  }
  return "Welcome!";        // only reached if we got past the guard
}
```

That first `if` is called a **guard clause**: a bouncer at the door of your
function. No `else` needed!

The rollercoaster rules, in order:

1. shorter than 120 cm → `"Sorry, you're not tall enough."`
2. otherwise, no ticket → `"You need a ticket first."`
3. otherwise → `"Enjoy the ride!"`

Write `rideCheck(height, hasTicket)` using two guards. `hasTicket` is a
boolean.

## Examples

| When you call           | It returns                        |
| ----------------------- | --------------------------------- |
| `rideCheck(150, true)`  | `"Enjoy the ride!"`               |
| `rideCheck(110, true)`  | `"Sorry, you're not tall enough."`|
| `rideCheck(150, false)` | `"You need a ticket first."`      |

## What the tests check

- tall enough with a ticket → ride time
- too short → stopped at the gate, ticket or not
- tall enough but no ticket → sent to the ticket booth
- exactly 120 cm is tall enough

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

Guard one: `if (height < 120) { return ...; }`
Guard two: `if (!hasTicket) { return ...; }`
The `!` means NOT, it flips a boolean.

</details>
