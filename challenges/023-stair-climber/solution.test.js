// Tests for challenge 023.

const { stepsToFloor } = require("./solution");

describe("023: Stair Climber", () => {
  test("3 floors → 60 steps", () => {
    expect(stepsToFloor(3)).toBe(60);
  });

  test("1 floor → 10 steps", () => {
    expect(stepsToFloor(1)).toBe(10);
  });

  test("5 floors → 150 steps", () => {
    expect(stepsToFloor(5)).toBe(150);
  });
});
