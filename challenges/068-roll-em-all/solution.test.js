// Tests for challenge 068.

const { rollMany } = require("./solution");

describe("068: Roll 'Em All", () => {
  test("rolls exactly as many dice as asked", () => {
    expect(rollMany(5).length).toBe(5);
    expect(rollMany(1).length).toBe(1);
  });

  test("every die lands between 1 and 6", () => {
    for (let i = 0; i < 40; i++) {
      const rolls = rollMany(5);
      for (let j = 0; j < rolls.length; j++) {
        expect(rolls[j]).toBeGreaterThanOrEqual(1);
        expect(rolls[j]).toBeLessThanOrEqual(6);
        expect(Number.isInteger(rolls[j])).toBe(true);
      }
    }
  });

  test("the dice don't all copy each other", () => {
    const seen = new Set();
    for (let i = 0; i < 40; i++) {
      const rolls = rollMany(5);
      for (let j = 0; j < rolls.length; j++) {
        seen.add(rolls[j]);
      }
    }
    // 200 dice showing at most two faces means the dice are clones.
    expect(seen.size).toBeGreaterThanOrEqual(3);
  });

  test("zero dice returns an empty array", () => {
    expect(rollMany(0)).toEqual([]);
  });
});
