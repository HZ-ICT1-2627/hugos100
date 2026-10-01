// Tests for challenge 064.

const { randomBetween } = require("./solution");

describe("064: Pick a Number", () => {
  test("200 picks between 10 and 20 stay in range", () => {
    for (let i = 0; i < 200; i++) {
      const pick = randomBetween(10, 20);
      expect(pick).toBeGreaterThanOrEqual(10);
      expect(pick).toBeLessThanOrEqual(20);
    }
  });

  test("every pick is a whole number", () => {
    for (let i = 0; i < 200; i++) {
      expect(Number.isInteger(randomBetween(3, 8))).toBe(true);
    }
  });

  test("both ends of the range actually come up", () => {
    const seen = new Set();
    for (let i = 0; i < 200; i++) {
      seen.add(randomBetween(1, 3));
    }
    expect(seen.has(1)).toBe(true);
    expect(seen.has(3)).toBe(true);
  });

  test("a one-number range always returns that number", () => {
    for (let i = 0; i < 50; i++) {
      expect(randomBetween(5, 5)).toBe(5);
    }
  });
});
