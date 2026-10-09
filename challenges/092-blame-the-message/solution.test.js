// Tests for challenge 092.

const { tryRead } = require("./solution");

describe("092: Blame the Message", () => {
  test("a normal page reads fine", () => {
    expect(tryRead(5)).toBe("Dear diary, day 5 was fine.");
  });

  test("the glued page reports its own message", () => {
    expect(tryRead(13)).toBe("Problem: Page 13 is glued shut.");
  });

  test("a blank page reports its own message", () => {
    expect(tryRead(99)).toBe("Problem: That page is blank.");
  });

  test("page 30 is the last written page, page 31 is blank", () => {
    expect(tryRead(30)).toBe("Dear diary, day 30 was fine.");
    expect(tryRead(31)).toBe("Problem: That page is blank.");
  });
});
