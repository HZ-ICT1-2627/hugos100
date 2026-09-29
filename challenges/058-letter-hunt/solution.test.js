// Tests for challenge 058.
// The last test reads your solution.js as TEXT: no "for (" or
// "while (" allowed. Comment lines don't count.

const fs = require("fs");
const { countLetter } = require("./solution");

describe("058: Letter Hunt", () => {
  test("counts the a's in banana", () => {
    expect(countLetter("banana", "a")).toBe(3);
  });

  test("counts the s's in mississippi", () => {
    expect(countLetter("mississippi", "s")).toBe(4);
  });

  test("a missing letter counts zero times", () => {
    expect(countLetter("sky", "a")).toBe(0);
  });

  test("a word of only that letter counts every one", () => {
    expect(countLetter("aaa", "a")).toBe(3);
  });

  test("an empty word counts zero times", () => {
    expect(countLetter("", "a")).toBe(0);
  });

  test("no for, no while (we peek!)", () => {
    const sourceCode = fs.readFileSync(__dirname + "/solution.js", "utf8");
    const codeOnly = sourceCode
      .split("\n")
      .filter((line) => !line.trim().startsWith("//"))
      .join("\n");
    expect(codeOnly).not.toContain("for (");
    expect(codeOnly).not.toContain("while (");
  });
});
