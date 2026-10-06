// Tests for challenge 079.

const { findPet } = require("./solution");

describe("079: Find My Pet", () => {
  test("finds the pet with the matching name", () => {
    expect(
      findPet(
        [
          { name: "Rex", sound: "Woof" },
          { name: "Mia", sound: "Meow" },
          { name: "Goldie", sound: "Blub" },
        ],
        "Mia"
      )
    ).toEqual({ name: "Mia", sound: "Meow" });
  });

  test("returns the whole pet object, not just the name", () => {
    expect(findPet([{ name: "Rex", sound: "Woof" }], "Rex")).toEqual({ name: "Rex", sound: "Woof" });
  });

  test("returns null when the pet is not in the list", () => {
    expect(
      findPet(
        [
          { name: "Rex", sound: "Woof" },
          { name: "Mia", sound: "Meow" },
        ],
        "Hamtaro"
      )
    ).toBe(null);
  });
});
