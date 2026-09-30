// Tests for challenge 059.

const { fib } = require("./solution");

describe("059: Rabbit Numbers", () => {
  test("the first two rabbit numbers are 1", () => {
    expect(fib(1)).toBe(1);
    expect(fib(2)).toBe(1);
  });

  test("the sixth is 8", () => {
    expect(fib(6)).toBe(8);
  });

  test("the tenth is 55", () => {
    expect(fib(10)).toBe(55);
  });
});
