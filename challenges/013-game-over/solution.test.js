// Tests for challenge 013.

const { checkLives } = require("./solution");

describe("013: Game Over", () => {
  test("0 lives means game over", () => {
    expect(checkLives(0)).toBe("Game over");
  });

  test("3 lives means keep playing", () => {
    expect(checkLives(3)).toBe("Keep playing");
  });

  test("even 1 life means keep playing", () => {
    expect(checkLives(1)).toBe("Keep playing");
  });
});
