// Tests for challenge 063.

const { rollTwo } = require("./solution");

describe("063: Double Dice", () => {
  test("200 rolls all land between 2 and 12", () => {
    for (let i = 0; i < 200; i++) {
      const total = rollTwo();
      expect(total).toBeGreaterThanOrEqual(2);
      expect(total).toBeLessThanOrEqual(12);
    }
  });

  test("every total is a whole number", () => {
    for (let i = 0; i < 200; i++) {
      expect(Number.isInteger(rollTwo())).toBe(true);
    }
  });

  test("the totals show variety", () => {
    const seen = new Set();
    for (let i = 0; i < 200; i++) {
      seen.add(rollTwo());
    }
    expect(seen.size).toBeGreaterThanOrEqual(4);
  });
});
