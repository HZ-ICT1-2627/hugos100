// Tests for challenge 081.

const { tagOf } = require("./solution");

describe("081: Nickname Slicer", () => {
  test("makes BEN out of Benjamin", () => {
    expect(tagOf("Benjamin")).toBe("BEN");
  });

  test("lowercase names get capital tags", () => {
    expect(tagOf("ada")).toBe("ADA");
  });

  test("short names keep what they have", () => {
    expect(tagOf("Mo")).toBe("MO");
  });
});
