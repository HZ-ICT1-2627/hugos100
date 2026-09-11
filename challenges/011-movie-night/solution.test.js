// Tests for challenge 011.
// Three tests today, and your function must get ALL of them right.
// Pay attention to the middle one: exactly 13 is a sneaky edge case.

const { canWatch } = require("./solution");

describe("011: Movie Night", () => {
  test("15-year-olds can watch", () => {
    expect(canWatch(15)).toBe("Enjoy the movie!");
  });

  test("exactly 13 is old enough too", () => {
    expect(canWatch(13)).toBe("Enjoy the movie!");
  });

  test("11-year-olds cannot watch", () => {
    expect(canWatch(11)).toBe("Sorry, too young.");
  });
});
