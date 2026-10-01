// Tests for challenge 066.

const { botMove } = require("./solution");

describe("066: RPS Bot", () => {
  test("200 moves are all legal rps moves", () => {
    for (let i = 0; i < 200; i++) {
      expect(["rock", "paper", "scissors"]).toContain(botMove());
    }
  });

  test("all three moves show up over time", () => {
    const seen = new Set();
    for (let i = 0; i < 200; i++) {
      seen.add(botMove());
    }
    expect(seen.size).toBe(3);
  });

  test("the move comes back as a string", () => {
    expect(typeof botMove()).toBe("string");
  });
});
