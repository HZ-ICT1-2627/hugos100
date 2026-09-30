// Tests for challenge 061.

const { flip } = require("./solution");

describe("061: Coin Flip", () => {
  test("200 flips produce only heads and tails", () => {
    for (let i = 0; i < 200; i++) {
      expect(["heads", "tails"]).toContain(flip());
    }
  });

  test("both sides of the coin actually come up", () => {
    const seen = new Set();
    for (let i = 0; i < 200; i++) {
      seen.add(flip());
    }
    // 200 flips of a fair coin land on one side only once in every
    // 10^60 universes. We accept the risk.
    expect(seen.size).toBe(2);
  });
});
