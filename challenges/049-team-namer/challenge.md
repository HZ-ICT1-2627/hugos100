# 049: Team Namer 🏐

**Concept:** functions + arrays together · **Difficulty:** ★★★☆☆

## Goal

Turn an array of names into one team introduction.

## Description

Almost at the end of the Functions unit. Today is quiet practice: a
function that takes an array and builds a string from it, like you did in
Roll Call, but with a twist at the end.

`introduceTeam(names, teamName)` returns:

```text
<name>, <name> and <name>: together we are <teamName>!
```

So for `["Mo", "Sara", "Liv"]` and `"The Sparks"`:

```text
Mo, Sara and Liv: together we are The Sparks!
```

The puzzle is the separators: a comma-space between names, but `" and "`
before the LAST name. Think about which name is special before you start
looping. (There will always be at least two names.)

## Examples

| When you call                                | It returns                                  |
| -------------------------------------------- | ------------------------------------------- |
| `introduceTeam(["Mo", "Sara"], "Duo")`        | `"Mo and Sara: together we are Duo!"`       |
| `introduceTeam(["A", "B", "C"], "Trio")`      | `"A, B and C: together we are Trio!"`       |

## What the tests check

- introduces a team of two
- introduces a team of three
- introduces a team of four

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

Three parts: the FIRST name, then the middle names, then the last name.
Start your string with `names[0]`, and handle the last name after the loop
with `" and " + names[names.length - 1]`.

</details>

<details>
<summary>💡 Hint 2 (click to open)</summary>

The loop only covers the middle: start at `i = 1`, stop before
`names.length - 1`, and add `", " + names[i]` each round. For a team of
two, that loop simply runs zero times. Exactly right!

</details>
