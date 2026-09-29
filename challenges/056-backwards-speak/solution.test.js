// Tests for challenge 056.
// The last test reads your solution.js as TEXT: no "for (" or
// "while (" allowed. Comment lines don't count.

const fs = require("fs");
const { reverseWord } = require("./solution");

describe("056: Backwards Speak", () => {
  test("reverses a word", () => {
    expect(reverseWord("hello")).toBe("olleh");
  });

  test("stressed becomes desserts", () => {
    expect(reverseWord("stressed")).toBe("desserts");
  });

  test("a single letter is its own reverse", () => {
    expect(reverseWord("a")).toBe("a");
  });

  test("an empty string stays empty", () => {
    expect(reverseWord("")).toBe("");
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
