// Tests for challenge 040, the unit boss.

const { countPasses } = require("./solution");

describe("040: Grade Counter", () => {
  test("counts 3 passes out of 4 grades", () => {
    expect(countPasses([7.2, 4.0, 5.5, 9.1])).toBe(3);
  });

  test("a class where nobody passed (rough week)", () => {
    expect(countPasses([3.0, 4.5])).toBe(0);
  });

  test("a class where everybody passed", () => {
    expect(countPasses([6.0, 7.5, 10.0])).toBe(3);
  });

  test("exactly 5.5 still counts as a pass", () => {
    expect(countPasses([5.5])).toBe(1);
  });
});
