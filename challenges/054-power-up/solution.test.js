// Tests for challenge 054.
// The last test reads your solution.js as TEXT: no "for (" or
// "while (" allowed. Comment lines don't count.

const fs = require("fs");
const { power } = require("./solution");

describe("054: Power Up", () => {
  test("two to the third is 8", () => {
    expect(power(2, 3)).toBe(8);
  });

  test("five squared is 25", () => {
    expect(power(5, 2)).toBe(25);
  });

  test("anything to the power zero is 1", () => {
    expect(power(7, 0)).toBe(1);
  });

  test("doubling ten times reaches 1024", () => {
    expect(power(2, 10)).toBe(1024);
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
