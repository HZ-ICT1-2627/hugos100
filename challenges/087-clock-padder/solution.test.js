// Tests for challenge 087.

const { clockTime } = require("./solution");

describe("087: Clock Padder", () => {
  test("pads single-digit seconds", () => {
    expect(clockTime(5, 5)).toBe("5:05");
  });

  test("leaves double-digit seconds alone", () => {
    expect(clockTime(12, 30)).toBe("12:30");
  });

  test("zero minutes with padded seconds", () => {
    expect(clockTime(0, 9)).toBe("0:09");
  });
});
