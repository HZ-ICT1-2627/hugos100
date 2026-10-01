// Tests for challenge 065.

const { pickOne } = require("./solution");

describe("065: Random Picker", () => {
  test("always returns something that's in the list", () => {
    const options = ["Mo", "Ana", "Liv"];
    for (let i = 0; i < 200; i++) {
      expect(options).toContain(pickOne(options));
    }
  });

  test("a one-item list has no suspense", () => {
    expect(pickOne(["only me"])).toBe("only me");
  });

  test("over many picks, different items come up", () => {
    const seen = new Set();
    for (let i = 0; i < 200; i++) {
      seen.add(pickOne(["a", "b", "c"]));
    }
    expect(seen.size).toBeGreaterThanOrEqual(2);
  });
});
