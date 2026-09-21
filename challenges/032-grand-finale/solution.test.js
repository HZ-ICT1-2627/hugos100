// Tests for challenge 032.

const { lastSong } = require("./solution");

describe("032: Grand Finale", () => {
  test("the last of three songs", () => {
    expect(lastSong(["Believer", "Thunder", "Sharks"])).toBe("Sharks");
  });

  test("the last of six songs", () => {
    expect(lastSong(["A", "B", "C", "D", "E", "Encore"])).toBe("Encore");
  });

  test("a playlist with one song (it's first AND last)", () => {
    expect(lastSong(["Levitating"])).toBe("Levitating");
  });
});
