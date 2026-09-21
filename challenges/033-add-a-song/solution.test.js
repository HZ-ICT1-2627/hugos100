// Tests for challenge 033.
// New matcher! toEqual compares arrays item by item.
// (toBe only works for single values like numbers and strings.)

const { addSong } = require("./solution");

describe("033: Add a Song", () => {
  test("adds a song to a playlist of one", () => {
    expect(addSong(["Believer"], "Thunder")).toEqual(["Believer", "Thunder"]);
  });

  test("adds a song to an empty playlist", () => {
    expect(addSong([], "Flowers")).toEqual(["Flowers"]);
  });

  test("the new song goes at the END", () => {
    expect(addSong(["A", "B"], "C")).toEqual(["A", "B", "C"]);
  });
});
