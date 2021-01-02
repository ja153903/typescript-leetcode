import { maxLength } from "../../src/microsoft/maximum-length-of-concatenated-string-with-unique-characters-1239";

describe("1239. Maximum Length of Concatenated String with Unique Characters", () => {
  test("Case 1", () => {
    const arr = ["un", "iq", "ue"];

    expect(maxLength(arr)).toBe(4);
  });
});
