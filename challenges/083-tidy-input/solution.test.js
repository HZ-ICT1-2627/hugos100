// Tests for challenge 083.

const { tidy } = require("./solution");

describe("083: Tidy Input", () => {
  test("cuts spaces from both ends", () => {
    expect(tidy("  Mo  ")).toBe("mo");
  });

  test("lowercases while it's at it", () => {
    expect(tidy("PIXEL ")).toBe("pixel");
  });

  test("spaces in the MIDDLE survive", () => {
    expect(tidy("ice tea")).toBe("ice tea");
  });
});
