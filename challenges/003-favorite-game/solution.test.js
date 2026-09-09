// Tests for challenge 003.

const { favoriteGame } = require("./solution");

describe("003: Favorite Game", () => {
  test('returns "Mario Kart"', () => {
    expect(favoriteGame()).toBe("Mario Kart");
  });
});
