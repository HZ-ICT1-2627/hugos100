// Tests for challenge 030, the unit boss.

const { starStaircase } = require("./solution");

describe("030: Star Staircase", () => {
  test("a staircase of 3 levels", () => {
    expect(starStaircase(3)).toBe("*\n**\n***\n");
  });

  test("a staircase of 5 levels", () => {
    expect(starStaircase(5)).toBe("*\n**\n***\n****\n*****\n");
  });

  test("a single step", () => {
    expect(starStaircase(1)).toBe("*\n");
  });
});
