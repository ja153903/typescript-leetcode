import MaxStack from "../../src/algo-curated/max-stack-716";

describe("MaxStack", () => {
  test("Should complete flow", () => {
    const maxStack = new MaxStack();

    maxStack.push(-2);

    expect(maxStack.popMax()).toBe(-2);
  });
});
