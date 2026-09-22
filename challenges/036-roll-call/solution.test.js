// Tests for challenge 036.

const { rollCall } = require("./solution");

describe("036: Roll Call", () => {
  test("greets two students in order", () => {
    expect(rollCall(["Mo", "Sara"])).toBe("Hi Mo! Hi Sara! ");
  });

  test("greets four students in order", () => {
    expect(rollCall(["Ade", "Bo", "Cas", "Demi"])).toBe("Hi Ade! Hi Bo! Hi Cas! Hi Demi! ");
  });

  test("an empty classroom returns an empty string", () => {
    expect(rollCall([])).toBe("");
  });
});
