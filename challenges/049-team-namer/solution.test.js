// Tests for challenge 049.

const { introduceTeam } = require("./solution");

describe("049: Team Namer", () => {
  test("introduces a team of two", () => {
    expect(introduceTeam(["Mo", "Sara"], "Duo")).toBe("Mo and Sara: together we are Duo!");
  });

  test("introduces a team of three", () => {
    expect(introduceTeam(["A", "B", "C"], "Trio")).toBe("A, B and C: together we are Trio!");
  });

  test("introduces a team of four", () => {
    expect(introduceTeam(["Ade", "Bo", "Cas", "Demi"], "The Sparks")).toBe(
      "Ade, Bo, Cas and Demi: together we are The Sparks!"
    );
  });
});
