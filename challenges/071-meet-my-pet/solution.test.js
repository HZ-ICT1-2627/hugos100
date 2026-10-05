// Tests for challenge 071.

const { meetMyPet } = require("./solution");

describe("071: Meet My Pet", () => {
  test("returns the name Shelly, read from your object", () => {
    expect(meetMyPet()).toBe("Shelly");
  });
});
