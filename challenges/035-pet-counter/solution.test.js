// Tests for challenge 035.

const { petReport } = require("./solution");

describe("035: Pet Counter", () => {
  test("counts 3 pets", () => {
    expect(petReport(["Rex", "Mimi", "Bubbles"])).toBe("You are watching 3 pets this weekend!");
  });

  test("counts 1 pet", () => {
    expect(petReport(["Rex"])).toBe("You are watching 1 pets this weekend!");
  });

  test("an empty list means a quiet weekend", () => {
    expect(petReport([])).toBe("A quiet weekend.");
  });
});
