// Tests for challenge 022.

const { countTo } = require("./solution");

describe("022: Count to N", () => {
  test("counts to 5", () => {
    expect(countTo(5)).toBe("1 2 3 4 5 ");
  });

  test("counts to 2", () => {
    expect(countTo(2)).toBe("1 2 ");
  });

  test("counts to 1", () => {
    expect(countTo(1)).toBe("1 ");
  });
});
