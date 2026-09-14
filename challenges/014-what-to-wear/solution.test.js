// Tests for challenge 014.
// The last two tests are border cases. They catch the difference
// between < and <=. Borders are where bugs live!

const { whatToWear } = require("./solution");

describe("014: What to Wear", () => {
  test("3 degrees → coat", () => {
    expect(whatToWear(3)).toBe("Coat 🧥");
  });

  test("15 degrees → sweater", () => {
    expect(whatToWear(15)).toBe("Sweater 🧶");
  });

  test("25 degrees → t-shirt", () => {
    expect(whatToWear(25)).toBe("T-shirt 👕");
  });

  test("exactly 10 degrees → sweater (not coat!)", () => {
    expect(whatToWear(10)).toBe("Sweater 🧶");
  });

  test("exactly 20 degrees → t-shirt (not sweater!)", () => {
    expect(whatToWear(20)).toBe("T-shirt 👕");
  });
});
