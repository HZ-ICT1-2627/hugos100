// Tests for challenge 005.

const { introduce } = require("./solution");

describe("005: Introduce Yourself", () => {
  test("introduces Noa, who is 19", () => {
    expect(introduce("Noa", 19)).toBe("Hi, I'm Noa and I'm 19 years old.");
  });

  test("introduces Liam, who is 21", () => {
    expect(introduce("Liam", 21)).toBe("Hi, I'm Liam and I'm 21 years old.");
  });
});
