// Tests for challenge 010.

const { emojiStory } = require("./solution");

describe("010: Emoji Story", () => {
  test("tells the whole story: 🌱🌿🌳🍎", () => {
    expect(emojiStory()).toBe("🌱🌿🌳🍎");
  });
});
