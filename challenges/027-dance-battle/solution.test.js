// Tests for challenge 027.

const { danceBattle } = require("./solution");

describe("027: Dance Battle", () => {
  test("35 energy is enough for 3 moves", () => {
    expect(danceBattle(35)).toBe(3);
  });

  test("50 energy is enough for 5 moves", () => {
    expect(danceBattle(50)).toBe(5);
  });

  test("5 energy is not enough for a single move", () => {
    expect(danceBattle(5)).toBe(0);
  });
});
