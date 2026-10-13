// Tests for challenge 094.

const { parseSafely } = require("./solution");

describe("094: JSON Parachute", () => {
  test("parses a valid object", () => {
    expect(parseSafely('{"name":"Mo"}')).toEqual({ name: "Mo" });
  });

  test("parses a valid array", () => {
    expect(parseSafely("[1, 2, 3]")).toEqual([1, 2, 3]);
  });

  test("broken text becomes null instead of a crash", () => {
    expect(parseSafely("not json at all {{")).toBe(null);
    expect(parseSafely("")).toBe(null);
  });
});
