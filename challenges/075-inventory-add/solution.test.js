// Tests for challenge 075.

const { addToBag } = require("./solution");

describe("075: Inventory Add", () => {
  test("the new item lands at the end of the items array", () => {
    const character = addToBag({ owner: "Mo", items: ["rope"] }, "torch");
    expect(character.items).toEqual(["rope", "torch"]);
  });

  test("the owner stays the same", () => {
    const character = addToBag({ owner: "Vex", items: [] }, "map");
    expect(character.owner).toBe("Vex");
  });

  test("works on an empty inventory", () => {
    const character = addToBag({ owner: "Nova", items: [] }, "coin");
    expect(character.items).toEqual(["coin"]);
  });
});
