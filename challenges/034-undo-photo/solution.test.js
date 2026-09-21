// Tests for challenge 034.

const { undoPhoto } = require("./solution");

describe("034: Undo Photo", () => {
  test("removes the blurry photo at the end", () => {
    expect(undoPhoto(["beach", "sunset", "blurry"])).toEqual(["beach", "sunset"]);
  });

  test("an album of one becomes an empty album", () => {
    expect(undoPhoto(["oops"])).toEqual([]);
  });

  test("the other photos stay in order", () => {
    expect(undoPhoto(["cat", "dog", "ferret", "closed eyes"])).toEqual(["cat", "dog", "ferret"]);
  });
});
