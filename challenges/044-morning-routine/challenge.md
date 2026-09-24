# 044: Morning Routine ☀️

**Concept:** functions calling functions · **Difficulty:** ★★★☆☆

## Goal

Build one big function out of three small ones.

## Description

Functions can call other functions. That's how real programs are built:
small pieces that each do one thing, combined into bigger pieces.

Today's starter file has three tiny finished functions:

```js
function brushTeeth() { return "brushed teeth"; }
function getDressed() { return "got dressed"; }
function eatBreakfast() { return "ate breakfast"; }
```

Your job is the fourth one: `morningRoutine()`. It calls all three and
combines their answers into:

```text
I brushed teeth, got dressed and ate breakfast. Ready!
```

Don't type the texts again! The whole point is to *use* the small
functions: `${brushTeeth()}` works inside a template literal.

## Examples

| When you call       | It returns                                              |
| ------------------- | ------------------------------------------------------- |
| `morningRoutine()`  | `"I brushed teeth, got dressed and ate breakfast. Ready!"` |

## What the tests check

- the full routine in the right order
- the small functions still do their own jobs (don't change them!)

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

`` return `I ${brushTeeth()}, ${getDressed()} and ${eatBreakfast()}. Ready!`; ``

</details>
