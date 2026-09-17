// Tests for challenge 024.

const { rocketCountdown } = require("./solution");

describe("024: Rocket Countdown", () => {
  test("counts down from 5", () => {
    expect(rocketCountdown(5)).toBe("5 4 3 2 1 Liftoff!");
  });

  test("counts down from 3", () => {
    expect(rocketCountdown(3)).toBe("3 2 1 Liftoff!");
  });

  test("even a countdown from 1 works", () => {
    expect(rocketCountdown(1)).toBe("1 Liftoff!");
  });
});
