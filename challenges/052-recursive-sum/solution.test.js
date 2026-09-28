// Tests for challenge 052.

const fs = require("fs");
const { sumTo } = require("./solution");

describe("052: Recursive Sum", () => {
  test("sums up to 4", () => {
    expect(sumTo(4)).toBe(10);
  });

  test("the base case stands on its own", () => {
    expect(sumTo(1)).toBe(1);
  });

  test("Gauss's famous 5050 comes out", () => {
    expect(sumTo(100)).toBe(5050);
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
