// Tests for challenge 009.

const { usernameLength } = require("./solution");

describe("009: Username Check", () => {
  test('"Luka" has 4 characters', () => {
    expect(usernameLength("Luka")).toBe(4);
  });

  test('"xX_gamer_Xx" has 11 characters', () => {
    expect(usernameLength("xX_gamer_Xx")).toBe(11);
  });
});
