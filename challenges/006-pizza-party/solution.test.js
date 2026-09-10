// Tests for challenge 006.
// Note: the expected answers have no quotes. They're numbers, not text.

const { slicesEach } = require("./solution");

describe("006: Pizza Party", () => {
  test("8 slices for 4 friends → 2 each", () => {
    expect(slicesEach(8, 4)).toBe(2);
  });

  test("20 slices for 5 friends → 4 each", () => {
    expect(slicesEach(20, 5)).toBe(4);
  });
});
