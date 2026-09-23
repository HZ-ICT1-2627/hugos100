// Tests for challenge 042.

const { greet } = require("./solution");

describe("042: Double Greeting", () => {
  test("greets a happy Bo", () => {
    expect(greet("Bo", "happy")).toBe("Hey Bo, you look happy today!");
  });

  test("greets a sleepy Ade", () => {
    expect(greet("Ade", "sleepy")).toBe("Hey Ade, you look sleepy today!");
  });

  test("the order of the parameters is name first, mood second", () => {
    expect(greet("Sam", "great")).toBe("Hey Sam, you look great today!");
  });
});
