// Tests for challenge 038.

const { highScore } = require("./solution");

describe("038: High Score", () => {
  test("finds the highest of four scores", () => {
    expect(highScore([120, 90, 300, 250])).toBe(300);
  });

  test("works when the highest is the FIRST score", () => {
    expect(highScore([999, 1, 2])).toBe(999);
  });

  test("works when the highest is the LAST score", () => {
    expect(highScore([1, 2, 999])).toBe(999);
  });

  test("a single score is automatically the highest", () => {
    expect(highScore([42])).toBe(42);
  });
});
