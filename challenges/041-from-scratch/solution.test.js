// Tests for challenge 041.

const { doublePoints } = require("./solution");

describe("041: From Scratch", () => {
  test("doubles 50 points", () => {
    expect(doublePoints(50)).toBe(100);
  });

  test("doubles 7 points", () => {
    expect(doublePoints(7)).toBe(14);
  });

  test("doubling 0 is still 0", () => {
    expect(doublePoints(0)).toBe(0);
  });
});
