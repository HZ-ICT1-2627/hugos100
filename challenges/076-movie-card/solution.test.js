// Tests for challenge 076.

const { movieCard } = require("./solution");

describe("076: Movie Card", () => {
  test("makes a card for Inside Out", () => {
    expect(movieCard({ title: "Inside Out", year: 2015, rating: 8.1 })).toBe("Inside Out (2015) ★8.1");
  });

  test("makes a card for a different movie", () => {
    expect(movieCard({ title: "Spirited Away", year: 2001, rating: 8.6 })).toBe("Spirited Away (2001) ★8.6");
  });

  test("the shape is exact: parentheses, spaces, star", () => {
    expect(movieCard({ title: "Up", year: 2009, rating: 8.3 })).toBe("Up (2009) ★8.3");
  });
});
