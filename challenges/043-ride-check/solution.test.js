// Tests for challenge 043.

const { rideCheck } = require("./solution");

describe("043: Ride Check", () => {
  test("tall enough with a ticket → ride time", () => {
    expect(rideCheck(150, true)).toBe("Enjoy the ride!");
  });

  test("too short → stopped at the gate, ticket or not", () => {
    expect(rideCheck(110, true)).toBe("Sorry, you're not tall enough.");
    expect(rideCheck(110, false)).toBe("Sorry, you're not tall enough.");
  });

  test("tall enough but no ticket → sent to the ticket booth", () => {
    expect(rideCheck(150, false)).toBe("You need a ticket first.");
  });

  test("exactly 120 cm is tall enough", () => {
    expect(rideCheck(120, true)).toBe("Enjoy the ride!");
  });
});
