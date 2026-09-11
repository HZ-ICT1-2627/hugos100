// Tests for challenge 012.

const { passOrFail } = require("./solution");

describe("012: Pass or Fail", () => {
  test("an 8.2 passes", () => {
    expect(passOrFail(8.2)).toBe("Passed! 🎉");
  });

  test("exactly 5.5 passes (phew!)", () => {
    expect(passOrFail(5.5)).toBe("Passed! 🎉");
  });

  test("a 5.4 fails (ouch, so close)", () => {
    expect(passOrFail(5.4)).toBe("Failed 😢");
  });
});
