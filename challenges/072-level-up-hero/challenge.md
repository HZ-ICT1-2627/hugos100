# 072: Level Up Hero ⚔️

**Concept:** changing properties · **Difficulty:** ★★☆☆☆

## Goal

Raise a game character's level by 1 and return the updated hero.

## Description

Object properties aren't set in stone. You change them the same way you
change a variable, dot included:

```js
let phone = { battery: 80 };
phone.battery = 100;     // charged!
phone.battery += 5;      // also works (don't try this at home)
```

Your function receives a `hero` object that always has a `level` property
(the tests send different heroes). Raise the level by 1 and return the
hero.

## Examples

| When you call                                   | It returns                          |
| ----------------------------------------------- | ----------------------------------- |
| `levelUpHero({ name: "Pip", level: 4 })`        | `{ name: "Pip", level: 5 }`         |

## What the tests check

- Pip goes from level 4 to level 5
- a level 1 beginner reaches level 2
- the hero's other properties stay untouched

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

`hero.level += 1;` and then return the hero. Two lines.

</details>
