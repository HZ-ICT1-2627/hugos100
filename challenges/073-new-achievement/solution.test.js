// Tests for challenge 073.

const { unlock } = require("./solution");

describe("073: New Achievement", () => {
  test('Bo unlocks "first win"', () => {
    expect(unlock({ name: "Bo" }, "first win")).toEqual({ name: "Bo", achievement: "first win" });
  });

  test('Sam unlocks "speedrun" without losing his score', () => {
    expect(unlock({ name: "Sam", score: 120 }, "speedrun")).toEqual({
      name: "Sam",
      score: 120,
      achievement: "speedrun",
    });
  });

  test('the achievement lands under the property name "achievement"', () => {
    const player = unlock({ name: "Liv" }, "night owl");
    expect(player.achievement).toBe("night owl");
  });
});
