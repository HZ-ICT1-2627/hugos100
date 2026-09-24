// Tests for challenge 045.
// Look at the second test: it calls welcome() with NOTHING between
// the parentheses. That's when your default value does its job.

const { welcome } = require("./solution");

describe("045: Hello Stranger", () => {
  test("greets Noa by name", () => {
    expect(welcome("Noa")).toBe("Hello Noa!");
  });

  test("greets a nameless visitor as stranger", () => {
    expect(welcome()).toBe("Hello stranger!");
  });

  test("greets Sam by name", () => {
    expect(welcome("Sam")).toBe("Hello Sam!");
  });
});
