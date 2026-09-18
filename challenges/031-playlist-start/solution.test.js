// Tests for challenge 031.
// The [...] between the parentheses is a whole array going into your function.

const { firstSong } = require("./solution");

describe("031: Playlist Start", () => {
  test("the first of two songs", () => {
    expect(firstSong(["Believer", "Thunder"])).toBe("Believer");
  });

  test("the first of five songs", () => {
    expect(firstSong(["Flowers", "Vampire", "Espresso", "Greedy", "Houdini"])).toBe("Flowers");
  });

  test("a playlist with one song", () => {
    expect(firstSong(["Levitating"])).toBe("Levitating");
  });
});
