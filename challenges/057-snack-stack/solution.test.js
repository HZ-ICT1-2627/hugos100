// Tests for challenge 057.
// The last test reads your solution.js as TEXT: no "for (" or
// "while (" allowed. Comment lines don't count.

const fs = require("fs");
const { totalCalories } = require("./solution");

describe("057: Snack Stack", () => {
  test("totals a snack pile", () => {
    expect(totalCalories([220, 150, 310])).toBe(680);
  });

  test("one snack is its own total", () => {
    expect(totalCalories([90])).toBe(90);
  });

  test("an empty pile totals zero", () => {
    expect(totalCalories([])).toBe(0);
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
