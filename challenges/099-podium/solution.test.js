// Tests for challenge 099.

const { podium } = require("./solution");

describe("099: Podium", () => {
  test("picks the three highest, in order", () => {
    expect(podium([40, 90, 10, 70, 55])).toEqual([90, 70, 55]);
  });

  test("a two-score race has a two-step podium", () => {
    expect(podium([12, 8])).toEqual([12, 8]);
  });

  test("exactly three scores all make the podium", () => {
    expect(podium([3, 1, 2])).toEqual([3, 2, 1]);
  });
});
