// Tests for challenge 060.

const { isPalindrome } = require("./solution");

describe("060: Mirror Check", () => {
  test("recognizes kayak", () => {
    expect(isPalindrome("kayak")).toBe(true);
  });

  test("rejects pizza", () => {
    expect(isPalindrome("pizza")).toBe(false);
  });

  test("two equal letters are a palindrome", () => {
    expect(isPalindrome("aa")).toBe(true);
  });

  test("one letter is a palindrome", () => {
    expect(isPalindrome("z")).toBe(true);
  });

  test("letters must match at BOTH ends every layer down", () => {
    expect(isPalindrome("abca")).toBe(false);
  });
});
