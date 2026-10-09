// Tests for challenge 089.

const { slugify, wordCount } = require("./solution");

describe("089: Word Splitter", () => {
  test("slugify replaces spaces with dashes", () => {
    expect(slugify("my summer photos")).toBe("my-summer-photos");
    expect(slugify("the big day")).toBe("the-big-day");
  });

  test("a one-word title survives unchanged", () => {
    expect(slugify("hi")).toBe("hi");
  });

  test("wordCount counts the words", () => {
    expect(wordCount("my summer photos")).toBe(3);
    expect(wordCount("what a big day")).toBe(4);
  });

  test("a single word counts as one", () => {
    expect(wordCount("hi")).toBe(1);
  });
});
