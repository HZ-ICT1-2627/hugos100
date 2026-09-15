// Tests for challenge 020, the unit boss.

const { playRps } = require("./solution");

describe("020: Rock Paper Scissors", () => {
  test("rock beats scissors", () => {
    expect(playRps("rock", "scissors")).toBe("Player 1 wins!");
  });

  test("scissors beats paper", () => {
    expect(playRps("scissors", "paper")).toBe("Player 1 wins!");
  });

  test("paper beats rock", () => {
    expect(playRps("paper", "rock")).toBe("Player 1 wins!");
  });

  test("player 2 can win too", () => {
    expect(playRps("rock", "paper")).toBe("Player 2 wins!");
    expect(playRps("paper", "scissors")).toBe("Player 2 wins!");
  });

  test("same choice is a tie", () => {
    expect(playRps("rock", "rock")).toBe("It's a tie!");
    expect(playRps("paper", "paper")).toBe("It's a tie!");
  });
});
