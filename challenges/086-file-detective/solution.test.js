// Tests for challenge 086.

const { isImage, isHidden } = require("./solution");

describe("086: File Detective", () => {
  test("png and jpg are images", () => {
    expect(isImage("holiday.png")).toBe(true);
    expect(isImage("selfie.jpg")).toBe(true);
  });

  test("other files are not", () => {
    expect(isImage("essay.docx")).toBe(false);
  });

  test("dot-files are hidden", () => {
    expect(isHidden(".gitignore")).toBe(true);
  });

  test("a dot in the MIDDLE doesn't make a file hidden", () => {
    expect(isHidden("holiday.png")).toBe(false);
  });
});
