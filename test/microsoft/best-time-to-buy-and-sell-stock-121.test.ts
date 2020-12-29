import { maxProfit } from "../../src/microsoft/best-time-to-buy-and-sell-stock-121";

test("best-time-to-buy-sell-stock-121 case 1", () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
  expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
});
