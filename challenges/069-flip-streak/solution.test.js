// Tests for challenge 069.

const { flipsUntilHeads } = require("./solution");

describe("069: Flip Streak", () => {
  test("always at least one flip", () => {
    for (let i = 0; i < 200; i++) {
      expect(flipsUntilHeads()).toBeGreaterThanOrEqual(1);
    }
  });

  test("every answer is a whole number", () => {
    for (let i = 0; i < 200; i++) {
      expect(Number.isInteger(flipsUntilHeads())).toBe(true);
    }
  });

  test("an instant heads happens sometimes", () => {
    const seen = new Set();
    for (let i = 0; i < 200; i++) {
      seen.add(flipsUntilHeads());
    }
    // 200 rounds without a single first-flip heads: 0.5^200. No.
    expect(seen.has(1)).toBe(true);
  });

  test("a streak of tails happens sometimes", () => {
    const seen = new Set();
    for (let i = 0; i < 200; i++) {
      seen.add(flipsUntilHeads());
    }
    // Half the rounds should need 2+ flips; all-ones is a rigged coin.
    expect(seen.size).toBeGreaterThanOrEqual(2);
  });
});
