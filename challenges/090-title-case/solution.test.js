// Tests for challenge 090.

const { titleCase } = require("./solution");

describe("090: Title Case", () => {
  test("capitalizes every word of a title", () => {
    expect(titleCase("the big lebowski")).toBe("The Big Lebowski");
  });

  test("a one-word title works", () => {
    expect(titleCase("up")).toBe("Up");
  });

  test("one-letter words survive the recipe", () => {
    expect(titleCase("a bug s life")).toBe("A Bug S Life");
  });
});
