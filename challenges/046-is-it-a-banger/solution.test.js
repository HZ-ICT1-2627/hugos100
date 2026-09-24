// Tests for challenge 046.
// The expected values are the booleans true and false, no quotes.

const { isBanger } = require("./solution");

describe("046: Is It a Banger", () => {
  test("a 9 is a banger", () => {
    expect(isBanger(9)).toBe(true);
  });

  test("a 5 is not a banger", () => {
    expect(isBanger(5)).toBe(false);
  });

  test("an 8 just makes the cut", () => {
    expect(isBanger(8)).toBe(true);
  });
});
