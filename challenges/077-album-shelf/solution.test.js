// Tests for challenge 077.

const { firstAlbumTitle } = require("./solution");

describe("077: Album Shelf", () => {
  test("returns the title of the first album", () => {
    expect(
      firstAlbumTitle([
        { title: "Thriller", artist: "Michael Jackson" },
        { title: "Abbey Road", artist: "The Beatles" },
      ])
    ).toBe("Thriller");
  });

  test("works when the shelf has only one album", () => {
    expect(firstAlbumTitle([{ title: "Currents", artist: "Tame Impala" }])).toBe("Currents");
  });

  test("ignores the rest of the shelf", () => {
    expect(
      firstAlbumTitle([
        { title: "Lemonade", artist: "Beyoncé" },
        { title: "1989", artist: "Taylor Swift" },
        { title: "Random Access Memories", artist: "Daft Punk" },
      ])
    ).toBe("Lemonade");
  });
});
