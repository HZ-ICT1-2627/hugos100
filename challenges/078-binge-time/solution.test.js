// Tests for challenge 078.

const { totalMinutes } = require("./solution");

describe("078: Binge Time", () => {
  test("adds up a short season", () => {
    expect(
      totalMinutes([
        { title: "Pilot", minutes: 45 },
        { title: "Two", minutes: 50 },
        { title: "Finale", minutes: 62 },
      ])
    ).toBe(157);
  });

  test("returns 0 for an empty season", () => {
    expect(totalMinutes([])).toBe(0);
  });

  test("works for a season with one episode", () => {
    expect(totalMinutes([{ title: "The Movie", minutes: 90 }])).toBe(90);
  });
});
