// Tests for challenge 096.

const { sortScores } = require("./solution");

describe("096: Sort the Scores", () => {
  test("sorts a small list", () => {
    expect(sortScores([30, 10, 20])).toEqual([10, 20, 30]);
  });

  test("survives the 9 vs 100 trap", () => {
    expect(sortScores([10, 9, 100])).toEqual([9, 10, 100]);
  });

  test("an already sorted list stays sorted", () => {
    expect(sortScores([1, 2, 3])).toEqual([1, 2, 3]);
  });
});
