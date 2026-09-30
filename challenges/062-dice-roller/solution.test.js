// Tests for challenge 062.
// Random output can't be predicted, so these tests roll MANY times and
// check properties of the results instead of exact values.

const { rollDie } = require("./solution");

describe("062: Dice Roller", () => {
  test("200 rolls all land between 1 and 6", () => {
    for (let i = 0; i < 200; i++) {
      const roll = rollDie();
      expect(roll).toBeGreaterThanOrEqual(1);
      expect(roll).toBeLessThanOrEqual(6);
    }
  });

  test("every roll is a whole number", () => {
    for (let i = 0; i < 200; i++) {
      expect(Number.isInteger(rollDie())).toBe(true);
    }
  });

  test("the die shows variety (no paperweights)", () => {
    // A Set collects values while ignoring duplicates; its size is the
    // number of DIFFERENT faces we saw.
    const faces = new Set();
    for (let i = 0; i < 200; i++) {
      faces.add(rollDie());
    }
    expect(faces.size).toBeGreaterThanOrEqual(3);
  });
});
