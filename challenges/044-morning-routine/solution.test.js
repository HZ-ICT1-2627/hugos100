// Tests for challenge 044.

const { brushTeeth, morningRoutine } = require("./solution");

describe("044: Morning Routine", () => {
  test("the full routine in the right order", () => {
    expect(morningRoutine()).toBe("I brushed teeth, got dressed and ate breakfast. Ready!");
  });

  test("the small functions still do their own jobs (don't change them!)", () => {
    // brushTeeth must still exist and do its own little job.
    expect(brushTeeth()).toBe("brushed teeth");
  });
});
