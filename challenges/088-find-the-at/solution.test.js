// Tests for challenge 088.

const { getDomain } = require("./solution");

describe("088: Find the At", () => {
  test("extracts a short domain", () => {
    expect(getDomain("mo@school.nl")).toBe("school.nl");
  });

  test("works when the name part contains a dot", () => {
    expect(getDomain("a.lange@hz.nl")).toBe("hz.nl");
  });

  test("works for a one-letter name", () => {
    expect(getDomain("x@mail.com")).toBe("mail.com");
  });
});
