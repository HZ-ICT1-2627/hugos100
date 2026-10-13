// Tests for challenge 098.

const { chronological } = require("./solution");

describe("098: Sort by Year", () => {
  test("oldest movie first", () => {
    expect(
      chronological([
        { title: "Up", year: 2009 },
        { title: "Psycho", year: 1960 },
      ])
    ).toEqual([
      { title: "Psycho", year: 1960 },
      { title: "Up", year: 2009 },
    ]);
  });

  test("the whole objects survive the sorting", () => {
    const sorted = chronological([{ title: "Coco", year: 2017 }]);
    expect(sorted[0].title).toBe("Coco");
  });

  test("three movies land in the right order", () => {
    expect(
      chronological([
        { title: "Coco", year: 2017 },
        { title: "Psycho", year: 1960 },
        { title: "Up", year: 2009 },
      ])
    ).toEqual([
      { title: "Psycho", year: 1960 },
      { title: "Up", year: 2009 },
      { title: "Coco", year: 2017 },
    ]);
  });
});
