// Tests for challenge 085.

const { beepOut } = require("./solution");

describe("085: Swear Jar", () => {
  test("beeps a single occurrence", () => {
    expect(beepOut("what the duck", "duck")).toBe("what the BEEP");
  });

  test("beeps EVERY occurrence", () => {
    expect(beepOut("duck this duck", "duck")).toBe("BEEP this BEEP");
  });

  test("a clean sentence stays untouched", () => {
    expect(beepOut("lovely weather", "duck")).toBe("lovely weather");
  });
});
