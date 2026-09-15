// Tests for challenge 019.

const { ticketPrice } = require("./solution");

describe("019: Cinema Tickets", () => {
  test("children under 12 pay 6", () => {
    expect(ticketPrice(8)).toBe(6);
  });

  test("adults pay 12", () => {
    expect(ticketPrice(30)).toBe(12);
  });

  test("seniors (65 and older) pay 8", () => {
    expect(ticketPrice(70)).toBe(8);
  });

  test("exactly 12 counts as adult", () => {
    expect(ticketPrice(12)).toBe(12);
  });

  test("exactly 65 counts as senior", () => {
    expect(ticketPrice(65)).toBe(8);
  });
});
