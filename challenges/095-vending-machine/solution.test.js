// Tests for challenge 095.

const { vend, safeVend } = require("./solution");

describe("095: Vending Machine", () => {
  test("enough coins buys a snack", () => {
    expect(safeVend(5, "soda")).toBe("Enjoy your soda!");
  });

  test("vend itself throws both messages", () => {
    expect(() => vend(5, "caviar")).toThrow("Unknown snack.");
    expect(() => vend(1, "chips")).toThrow("Not enough coins.");
  });

  test("safeVend translates both crashes into friendly messages", () => {
    expect(safeVend(5, "caviar")).toBe("Sorry: Unknown snack.");
    expect(safeVend(1, "chips")).toBe("Sorry: Not enough coins.");
  });

  test("exact change works", () => {
    expect(safeVend(2, "chips")).toBe("Enjoy your chips!");
    expect(safeVend(3, "soda")).toBe("Enjoy your soda!");
  });
});
