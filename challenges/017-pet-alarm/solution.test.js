// Tests for challenge 017.

const { petAlarm } = require("./solution");

describe("017: Pet Alarm", () => {
  test("hungry → alarm", () => {
    expect(petAlarm(true, false)).toBe("Take care of your pet! 🚨");
  });

  test("thirsty → alarm", () => {
    expect(petAlarm(false, true)).toBe("Take care of your pet! 🚨");
  });

  test("hungry AND thirsty → alarm", () => {
    expect(petAlarm(true, true)).toBe("Take care of your pet! 🚨");
  });

  test("neither → all good", () => {
    expect(petAlarm(false, false)).toBe("All good, pet is happy 🐹");
  });
});
