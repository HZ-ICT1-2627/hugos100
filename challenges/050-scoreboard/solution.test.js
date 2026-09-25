// Tests for challenge 050, the unit boss. Halfway there!

const { addPoints, averageScore } = require("./solution");

describe("050: Scoreboard", () => {
  test("addPoints adds to the end of the list", () => {
    expect(addPoints([10, 20], 30)).toEqual([10, 20, 30]);
  });

  test("addPoints works on an empty list", () => {
    expect(addPoints([], 50)).toEqual([50]);
  });

  test("averageScore averages three scores", () => {
    expect(averageScore([10, 20, 30])).toBe(20);
  });

  test("averageScore of one score is that score", () => {
    expect(averageScore([80])).toBe(80);
  });

  test("averageScore of an empty list is 0 (the guard!)", () => {
    expect(averageScore([])).toBe(0);
  });
});
