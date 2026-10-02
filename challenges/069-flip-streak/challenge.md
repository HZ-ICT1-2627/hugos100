# 069: Flip Streak 🪙

**Concept:** looping until luck says stop · **Difficulty:** ★★★★☆

## Goal

Keep flipping a coin until heads shows up, and report how long it took.

## Description

`flipsUntilHeads()` flips a fair coin until it lands heads and
returns the NUMBER of flips it took, counting the final heads. Half
the time that's `1`. Sometimes it's 2 or 3. Once in a while the coin
trolls you with six tails straight.

Here's the interesting part: a `for` loop can't do this, because
nobody knows in advance how many rounds it takes. That's exactly the
job `while` was built for (hello, 027): keep going while the
condition holds, let luck decide when it stops. Flip inside the
loop, count every flip, escape on heads.

The coin: `Math.random() < 0.5`, the 067 comparison at fifty-fifty.

## Examples

| When you call         | It returns                          |
| --------------------- | ----------------------------------- |
| `flipsUntilHeads()`   | `1`, about half the time            |
| `flipsUntilHeads()`   | `4`, when tails gets cheeky         |

## What the tests check

- always at least one flip
- every answer is a whole number
- an instant heads happens sometimes
- a streak of tails happens sometimes

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

One shape that works: a counter plus a boolean that starts `false`
and flips the loop off when heads finally lands:

```js
let flips = 0;
let landedHeads = false;
while (!landedHeads) {
  flips++;
  // set landedHeads with the coin comparison
}
```

</details>
