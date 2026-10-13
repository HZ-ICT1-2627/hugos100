// Tests for challenge 097.

const { ranking } = require("./solution");

describe("097: Reverse Ranking", () => {
  test("highest score first", () => {
    expect(ranking([30, 100, 20])).toEqual([100, 30, 20]);
  });

  test("the text-sort trap stays defeated in reverse too", () => {
    expect(ranking([9, 100, 10])).toEqual([100, 10, 9]);
  });

  test("a single score is its own ranking", () => {
    expect(ranking([5])).toEqual([5]);
  });
});
