// Tests for challenge 067.

const { openChest } = require("./solution");

describe("067: Loot Drop", () => {
  test("200 chests contain only swords or dust", () => {
    for (let i = 0; i < 200; i++) {
      expect(["epic sword", "dust"]).toContain(openChest());
    }
  });

  test("the sword actually drops", () => {
    const seen = new Set();
    for (let i = 0; i < 500; i++) {
      seen.add(openChest());
    }
    // 500 chests without one sword at 30%: once per 10^77 universes.
    expect(seen.has("epic sword")).toBe(true);
  });

  test("dust actually happens", () => {
    const seen = new Set();
    for (let i = 0; i < 500; i++) {
      seen.add(openChest());
    }
    expect(seen.has("dust")).toBe(true);
  });

  test("dust is more common than swords", () => {
    let swords = 0;
    let dust = 0;
    for (let i = 0; i < 1000; i++) {
      if (openChest() === "epic sword") {
        swords++;
      } else {
        dust++;
      }
    }
    // 30% vs 70% over 1000 opens: dust wins outside of statistics class.
    expect(dust).toBeGreaterThan(swords);
  });
});
