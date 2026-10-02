// Tests for challenge 070.

const { makeCode } = require("./solution");

describe("070: Secret Code", () => {
  test("the code has exactly the asked length", () => {
    expect(makeCode(4).length).toBe(4);
    expect(makeCode(10).length).toBe(10);
  });

  test("even a giant code has exactly the asked length", () => {
    expect(makeCode(500).length).toBe(500);
  });

  test("every character is a digit", () => {
    const code = makeCode(50);
    for (let i = 0; i < code.length; i++) {
      expect("0123456789".includes(code[i])).toBe(true);
    }
  });

  test("two long codes are (all but certainly) different", () => {
    expect(makeCode(12)).not.toBe(makeCode(12));
  });

  test("the code is a string", () => {
    expect(typeof makeCode(4)).toBe("string");
  });
});
