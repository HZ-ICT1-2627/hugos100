# 100: The Sorting Machine 🏆

**Concept:** build your own bubble sort · **Difficulty:** ★★★★★

## Goal

Day 100. Rebuild `.sort()` with your bare hands, then watch it dance.

## Description

For four days `.sort()` has been doing the work while you wrote the
comparator. Ever wondered what happens inside? Today you build the
machine yourself, and `.sort()` is BANNED (the tests read your file
and check).

The algorithm is bubble sort, the classic first sorting machine.
One **pass** walks the array left to right, comparing each pair of
neighbors and swapping them when they're in the wrong order. After
one full pass, the biggest number has bubbled all the way to the
end. Do enough passes and everything settles into place.

Two functions:

- `sortStep(numbers)`: ONE pass. Loop to the second-to-last
  position; at each spot, if `numbers[i] > numbers[i + 1]`, swap
  them. Swapping needs a spare variable: park one value, overwrite,
  restore. Change the array in place and return it.
- `bubbleSort(numbers)`: the full machine. A sorted array needs at
  most `numbers.length - 1` passes, so call `sortStep` that many
  times in a loop and return the array.

Then the payoff: open `index.html` in your browser. It draws your
numbers as bars and runs YOUR `sortStep` one pass at a time, so you
can literally watch the big bars bubble to the right. On day 001 you
returned a string. Today a built-in gets rebuilt from scratch. That
is the whole course in one sentence.

(Honesty footnote: real engines use faster machines with scarier
names. Same job, more gears. Bubble sort is the one you can see.)

## Examples

| When you call                     | It returns          |
| --------------------------------- | ------------------- |
| `sortStep([4, 3, 2, 1])`          | `[3, 2, 1, 4]`      |
| `bubbleSort([38, 7, 92, 55, 1])`  | `[1, 7, 38, 55, 92]`|

## What the tests check

- one pass bubbles the biggest number to the end
- one pass leaves a sorted array alone
- bubbleSort sorts the whole scoreboard
- an already sorted array stays sorted
- no .sort() allowed (we peek: today you ARE .sort)

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

The swap, the only genuinely new move today:

```js
const spare = numbers[i];
numbers[i] = numbers[i + 1];
numbers[i + 1] = spare;
```

</details>

<details>
<summary>💡 Hint 2 (click to open)</summary>

`bubbleSort` is short and humble:

```js
for (let pass = 0; pass < numbers.length - 1; pass++) {
  sortStep(numbers);
}
return numbers;
```

</details>
