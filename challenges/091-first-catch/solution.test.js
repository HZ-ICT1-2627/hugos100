// Tests for challenge 091.
//
// New test move: expect(() => ...).toThrow(...). Note the arrow wrapper!
// The test hands Jest a function to run, so Jest can catch the crash
// itself. Without the wrapper, the crash would happen before Jest looks.

const { launchRocket, safeLaunch } = require("./solution");

describe("091: First Catch", () => {
  test("a fueled rocket lifts off through safeLaunch", () => {
    expect(safeLaunch(150)).toBe("Liftoff!");
  });

  test("an empty rocket returns the abort message instead of crashing", () => {
    expect(safeLaunch(10)).toBe("Launch aborted.");
  });

  test("exactly 100 fuel is exactly enough", () => {
    expect(safeLaunch(100)).toBe("Liftoff!");
  });

  test("launchRocket itself still throws (leave it as it is!)", () => {
    expect(() => launchRocket(10)).toThrow("Not enough fuel.");
  });
});
