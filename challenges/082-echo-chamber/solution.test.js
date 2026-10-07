// Tests for challenge 082.

const { laugh } = require("./solution");

describe("082: Echo Chamber", () => {
  test("a triple laugh", () => {
    expect(laugh(3)).toBe("hahaha!");
  });

  test("a single laugh", () => {
    expect(laugh(1)).toBe("ha!");
  });

  test("intensity 0 is just the exclamation mark", () => {
    expect(laugh(0)).toBe("!");
  });
});
