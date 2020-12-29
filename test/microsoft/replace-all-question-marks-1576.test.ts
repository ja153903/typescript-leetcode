import { modifyString } from "../../src/microsoft/replace-all-question-marks-1576";

test("replace-all-?s case 1", () => {
  const s = "?zs";

  expect(modifyString(s)).toBe("azs");
  expect(modifyString("ubv?w")).toBe("ubvaw");
});
