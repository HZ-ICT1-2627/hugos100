// Tests for challenge 018.

const { checkAnswer } = require("./solution");

describe("018: Quiz Checker", () => {
  test('"Paris" is correct', () => {
    expect(checkAnswer("Paris")).toBe("Correct! ✅");
  });

  test('"PARIS" is correct (caps lock players exist)', () => {
    expect(checkAnswer("PARIS")).toBe("Correct! ✅");
  });

  test('"pArIs" is correct (chaos players exist too)', () => {
    expect(checkAnswer("pArIs")).toBe("Correct! ✅");
  });

  test('"London" is wrong', () => {
    expect(checkAnswer("London")).toBe("Wrong ❌");
  });
});
