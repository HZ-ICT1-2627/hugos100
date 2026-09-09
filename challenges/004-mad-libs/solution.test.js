// Tests for challenge 004.
// Notice: each test calls YOUR function with different values.
// The values go in the parentheses, exactly like in the Examples table.

const { madLib } = require("./solution");

describe("004: Mad Libs", () => {
  test("works for Anna and her dragon", () => {
    expect(madLib("Anna", "dragon")).toBe("Anna has a pet dragon.");
  });

  test("works for Sam and his rock", () => {
    expect(madLib("Sam", "rock")).toBe("Sam has a pet rock.");
  });
});
