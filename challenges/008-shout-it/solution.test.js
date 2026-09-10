// Tests for challenge 008.

const { shoutIt } = require("./solution");

describe("008: Shout It", () => {
  test('shouts "i love pizza"', () => {
    expect(shoutIt("i love pizza")).toBe("I LOVE PIZZA!");
  });

  test('shouts "goal"', () => {
    expect(shoutIt("goal")).toBe("GOAL!");
  });
});
