// Tests for challenge 055.

const { fade } = require("./solution");

describe("055: Echo Fade", () => {
  test("a three-letter word fades in three steps", () => {
    expect(fade("hey")).toBe("hey ey y");
  });

  test("a two-letter word fades once", () => {
    expect(fade("no")).toBe("no o");
  });

  test("a single letter doesn't echo", () => {
    expect(fade("x")).toBe("x");
  });
});
