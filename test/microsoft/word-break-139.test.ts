import { wordBreak } from "../../src/microsoft/word-break-139";

describe("139. Word Break", () => {
  test("Case 1", () => {
    const s: string = "leetcode";
    const wordDict: string[] = ["leet", "code"];

    expect(wordBreak(s, wordDict)).toBeTruthy();
  });
});
