// Tests for challenge 016.
// true and false have no quotes. They're booleans, not text.

const { gamingTime } = require("./solution");

describe("016: Perfect Weekend", () => {
  test("weekend + homework done → game on", () => {
    expect(gamingTime(true, true)).toBe("Game on! 🎮");
  });

  test("weekend but homework not done → not yet", () => {
    expect(gamingTime(true, false)).toBe("Not yet...");
  });

  test("homework done but it's a school day → not yet", () => {
    expect(gamingTime(false, true)).toBe("Not yet...");
  });
});
