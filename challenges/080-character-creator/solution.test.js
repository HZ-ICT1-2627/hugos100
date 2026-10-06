// Tests for challenge 080.

const { createCharacter } = require("./solution");

describe("080: Character Creator", () => {
  test("builds a wizard", () => {
    expect(createCharacter("Zelda", "wizard")).toEqual({
      name: "Zelda",
      role: "wizard",
      level: 1,
      hp: 100,
    });
  });

  test("builds a completely different character", () => {
    expect(createCharacter("Bram", "knight")).toEqual({
      name: "Bram",
      role: "knight",
      level: 1,
      hp: 100,
    });
  });

  test("every new character starts at level 1 with 100 hp", () => {
    const character = createCharacter("Pip", "healer");
    expect(character.level).toBe(1);
    expect(character.hp).toBe(100);
  });
});
