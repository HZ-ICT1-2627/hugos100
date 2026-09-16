// Tests for challenge 021.

const { jumpingJacks } = require("./solution");

describe("021: Jumping Jacks", () => {
  test("3 jumping jacks", () => {
    expect(jumpingJacks(3)).toBe("jump! jump! jump! ");
  });

  test("1 jumping jack", () => {
    expect(jumpingJacks(1)).toBe("jump! ");
  });

  test("0 jumping jacks → empty string (lazy day)", () => {
    expect(jumpingJacks(0)).toBe("");
  });
});
