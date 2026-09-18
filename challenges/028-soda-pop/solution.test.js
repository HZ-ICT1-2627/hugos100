// Tests for challenge 028.

const { sodaPop } = require("./solution");

describe("028: Soda Pop", () => {
  test("a round up to 7", () => {
    expect(sodaPop(7)).toBe("1 2 soda 4 pop soda 7 ");
  });

  test("a round up to 15 (the first soda-pop!)", () => {
    expect(sodaPop(15)).toBe("1 2 soda 4 pop soda 7 8 soda pop 11 soda 13 14 soda-pop ");
  });

  test("3 itself is already a soda", () => {
    expect(sodaPop(3)).toBe("1 2 soda ");
  });
});
