// Tests for challenge 026.
// \n in the expected text means "new line".

const { timesTable } = require("./solution");

describe("026: Times Table", () => {
  test("the table of 2", () => {
    expect(timesTable(2)).toBe("1 x 2 = 2\n2 x 2 = 4\n3 x 2 = 6\n4 x 2 = 8\n5 x 2 = 10\n");
  });

  test("the table of 7", () => {
    expect(timesTable(7)).toBe("1 x 7 = 7\n2 x 7 = 14\n3 x 7 = 21\n4 x 7 = 28\n5 x 7 = 35\n");
  });
});
