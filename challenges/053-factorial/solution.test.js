// Tests for challenge 053.

const { factorial } = require("./solution");

describe("053: Factorial", () => {
  test("5! is 120", () => {
    expect(factorial(5)).toBe(120);
  });

  test("0! is 1 (the weird one)", () => {
    expect(factorial(0)).toBe(1);
  });

  test("1! is 1", () => {
    expect(factorial(1)).toBe(1);
  });

  test("10! is 3628800", () => {
    expect(factorial(10)).toBe(3628800);
  });
});
