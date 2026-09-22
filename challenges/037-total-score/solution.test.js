// Tests for challenge 037.

const { totalScore } = require("./solution");

describe("037: Total Score", () => {
  test("adds three level scores", () => {
    expect(totalScore([100, 250, 80])).toBe(430);
  });

  test("a single level counts too", () => {
    expect(totalScore([50])).toBe(50);
  });

  test("no levels played → 0 points", () => {
    expect(totalScore([])).toBe(0);
  });
});
