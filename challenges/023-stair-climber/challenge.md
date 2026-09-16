# 023: Stair Climber 🪜

**Concept:** adding up with a loop · **Difficulty:** ★★☆☆☆

## Goal

Count every step you climb from floor 1 up to floor n.

## Description

The build-up pattern works with **numbers** too! Instead of growing a
string, grow a total:

```js
let total = 0;          // start at zero
for (...) {
  total += something;   // add to it each round
}
```

The fitness challenge: climbing to floor 1 takes 1 step... okay, our
building is weird: floor 1 takes 10 steps, floor 2 takes 20 steps, floor 3
takes 30 steps. Every floor `f` takes `f × 10` steps.

`stepsToFloor(3)` should count: 10 + 20 + 30 = `60`.

## Examples

| When you call     | It returns |
| ----------------- | ---------- |
| `stepsToFloor(3)` | `60`       |
| `stepsToFloor(1)` | `10`       |

## What the tests check

- 3 floors → 60 steps
- 1 floor → 10 steps
- 5 floors → 150 steps

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

Loop `i` from 1 to `floors`, and add `i * 10` to the total each round.

</details>

<details>
<summary>💡 Hint 2 (click to open)</summary>

Start the total at `0`, not `""` (that was for strings).

</details>
