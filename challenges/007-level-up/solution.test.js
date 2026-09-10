// Tests for challenge 007.

const { levelUp } = require("./solution");

describe("007: Level Up", () => {
  test("250 points + bonus → 350", () => {
    expect(levelUp(250)).toBe(350);
  });

  test("a brand new player (0 points) → 100", () => {
    expect(levelUp(0)).toBe(100);
  });
});
