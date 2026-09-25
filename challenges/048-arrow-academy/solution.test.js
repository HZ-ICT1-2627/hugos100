// Tests for challenge 048.
// The last test is unusual: it reads your solution.js as TEXT and checks
// that there's an => arrow in your actual code. Comment lines don't count,
// otherwise the example comment in the starter would pass for you!

const fs = require("fs");
const { tripleScore } = require("./solution");

describe("048: Arrow Academy", () => {
  test("triples 10", () => {
    expect(tripleScore(10)).toBe(30);
  });

  test("triples 7", () => {
    expect(tripleScore(7)).toBe(21);
  });

  test("tripleScore is written as an arrow function (we peek at your code!)", () => {
    const sourceCode = fs.readFileSync(__dirname + "/solution.js", "utf8");
    const codeOnly = sourceCode
      .split("\n")
      .filter((line) => !line.trim().startsWith("//"))
      .join("\n");
    expect(codeOnly).toContain("=>");
  });
});
