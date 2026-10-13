// Tests for challenge 100.
// The last test reads your solution.js as TEXT: no ".sort(" allowed.
// Comment lines don't count. Today the machine is yours.

const fs = require("fs");
const { sortStep, bubbleSort } = require("./solution");

describe("100: The Sorting Machine", () => {
  test("one pass bubbles the biggest number to the end", () => {
    expect(sortStep([4, 3, 2, 1])).toEqual([3, 2, 1, 4]);
  });

  test("one pass leaves a sorted array alone", () => {
    expect(sortStep([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test("bubbleSort sorts the whole scoreboard", () => {
    expect(bubbleSort([38, 7, 92, 55, 1])).toEqual([1, 7, 38, 55, 92]);
    expect(bubbleSort([2, 1])).toEqual([1, 2]);
  });

  test("an already sorted array stays sorted", () => {
    expect(bubbleSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  test("no .sort() allowed (we peek: today you ARE .sort)", () => {
    const sourceCode = fs.readFileSync(__dirname + "/solution.js", "utf8");
    const codeOnly = sourceCode
      .split("\n")
      .filter((line) => !line.trim().startsWith("//"))
      .join("\n");
    expect(codeOnly).not.toContain(".sort(");
  });
});
