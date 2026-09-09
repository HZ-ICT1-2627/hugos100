# 004: Mad Libs 📝

**Concept:** joining strings with `+` · **Difficulty:** ★☆☆☆☆

## Goal

Build the sentence `<name> has a pet <animal>.` by glueing strings together.

## Description

Two new things today!

**1. Your function receives values.** Look at the starter:

```js
function madLib(name, animal) {
```

`name` and `animal` are **parameters**: empty boxes that get filled the
moment someone calls your function. Call `madLib("Anna", "dragon")` and
inside the function, `name` is `"Anna"` and `animal` is `"dragon"`. (The
tests call your function with different values each time. That's how they
check it really works.)

**2. `+` glues strings together:**

```js
"Hot" + "dog"        // "Hotdog"
"Hot" + " " + "dog"  // "Hot dog"  ← you add spaces yourself!
```

## Examples

| When you call             | It returns                  |
| ------------------------- | --------------------------- |
| `madLib("Anna", "dragon")`| `"Anna has a pet dragon."`  |
| `madLib("Sam", "rock")`   | `"Sam has a pet rock."`     |

## What the tests check

- works for Anna and her dragon
- works for Sam and his rock

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

Don't forget the spaces around `has a pet`, and the full stop at the end.

</details>

<details>
<summary>💡 Hint 2 (click to open)</summary>

`return name + " has a pet " + animal + ".";`

</details>
