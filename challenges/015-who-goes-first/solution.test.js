// Tests for challenge 015.

const { whoStarts } = require("./solution");

describe("015: Who Goes First", () => {
  test("a roll of 4 (even) → player 1", () => {
    expect(whoStarts(4)).toBe("Player 1 starts");
  });

  test("a roll of 3 (odd) → player 2", () => {
    expect(whoStarts(3)).toBe("Player 2 starts");
  });

  test("a roll of 6 (even) → player 1", () => {
    expect(whoStarts(6)).toBe("Player 1 starts");
  });
});
