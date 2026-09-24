// Tests for challenge 047.

const { censorWord, filterChat } = require("./solution");

describe("047: Chat Filter", () => {
  test("the helper censors the banned word", () => {
    expect(censorWord("noob", "noob")).toBe("****");
  });

  test("the helper lets normal words through", () => {
    expect(censorWord("hi", "noob")).toBe("hi");
  });

  test("the filter cleans a whole chat message", () => {
    expect(filterChat(["gg", "noob", "wp"], "noob")).toBe("gg **** wp ");
  });

  test("a chat with no banned words survives untouched", () => {
    expect(filterChat(["nice", "play"], "noob")).toBe("nice play ");
  });
});
