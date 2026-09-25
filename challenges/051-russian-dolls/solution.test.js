// Tests for challenge 051.
// The last test reads your solution.js as TEXT: no "for (" or
// "while (" allowed. Comment lines don't count.

const fs = require("fs");
const { countdown } = require("./solution");

describe("051: Russian Dolls", () => {
  test("counts down from 3", () => {
    expect(countdown(3)).toBe("3 2 1 Liftoff!");
  });

  test("counts down from 1", () => {
    expect(countdown(1)).toBe("1 Liftoff!");
  });

  test("zero is instant liftoff", () => {
    expect(countdown(0)).toBe("Liftoff!");
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
