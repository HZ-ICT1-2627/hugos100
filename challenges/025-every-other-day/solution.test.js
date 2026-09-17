// Tests for challenge 025.

const { gymDays } = require("./solution");

describe("025: Every Other Day", () => {
  test("a 7-day plan has gym on 2, 4 and 6", () => {
    expect(gymDays(7)).toBe("2 4 6 ");
  });

  test("a 10-day plan has gym on 2, 4, 6, 8 and 10", () => {
    expect(gymDays(10)).toBe("2 4 6 8 10 ");
  });

  test("a 31-day month ends on day 30", () => {
    expect(gymDays(31)).toBe("2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 ");
  });
});
