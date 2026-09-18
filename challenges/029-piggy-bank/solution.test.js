// Tests for challenge 029.

const { piggyBank } = require("./solution");

describe("029: Piggy Bank", () => {
  test("6 days of saving → 12 euros (2 + 4 + 6)", () => {
    expect(piggyBank(6)).toBe(12);
  });

  test("day 7 adds nothing (odd days are snack days)", () => {
    expect(piggyBank(7)).toBe(12);
  });

  test("10 days of saving → 30 euros", () => {
    expect(piggyBank(10)).toBe(30);
  });
});
