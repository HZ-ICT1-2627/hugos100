// Tests for challenge 072.
// toEqual also compares objects, property by property.

const { levelUpHero } = require("./solution");

describe("072: Level Up Hero", () => {
  test("Pip goes from level 4 to level 5", () => {
    expect(levelUpHero({ name: "Pip", level: 4 })).toEqual({ name: "Pip", level: 5 });
  });

  test("a level 1 beginner reaches level 2", () => {
    expect(levelUpHero({ name: "Newbie", level: 1 })).toEqual({ name: "Newbie", level: 2 });
  });

  test("the hero's other properties stay untouched", () => {
    expect(levelUpHero({ name: "Zed", level: 9, hp: 50 })).toEqual({ name: "Zed", level: 10, hp: 50 });
  });
});
