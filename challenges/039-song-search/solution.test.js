// Tests for challenge 039.

const { requestSong } = require("./solution");

describe("039: Song Search", () => {
  test("spots a song that's already queued", () => {
    expect(requestSong(["Believer", "Sharks"], "Sharks")).toBe("Already in the queue!");
  });

  test("accepts a new song", () => {
    expect(requestSong(["Believer"], "Flowers")).toBe("Added to the queue!");
  });

  test('the match must be exact ("sharks" is not "Sharks")', () => {
    expect(requestSong(["Sharks"], "sharks")).toBe("Added to the queue!");
  });
});
