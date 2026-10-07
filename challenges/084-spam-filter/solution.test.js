// Tests for challenge 084.

const { isSpam } = require("./solution");

describe("084: Spam Filter", () => {
  test("catches a free money message", () => {
    expect(isSpam("click here for free money today")).toBe(true);
  });

  test("catches a you won message", () => {
    expect(isSpam("wow you won a brand new phone")).toBe(true);
  });

  test("shouting spammers don't slip through", () => {
    expect(isSpam("FREE MONEY FOR YOU")).toBe(true);
    expect(isSpam("Congrats, YOU WON!!!")).toBe(true);
  });

  test("normal messages pass the filter", () => {
    expect(isSpam("lunch at twelve?")).toBe(false);
    expect(isSpam("did you finish challenge 83 yet")).toBe(false);
  });
});
