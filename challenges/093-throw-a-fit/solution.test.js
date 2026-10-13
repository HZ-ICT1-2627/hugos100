// Tests for challenge 093.

const { withdraw } = require("./solution");

describe("093: Throw a Fit", () => {
  test("a normal withdrawal returns the new balance", () => {
    expect(withdraw(100, 30)).toBe(70);
  });

  test("withdrawing the exact balance is allowed", () => {
    expect(withdraw(50, 50)).toBe(0);
  });

  test("overdrawing throws, with that exact message", () => {
    expect(() => withdraw(50, 100)).toThrow("Not enough money.");
  });
});
