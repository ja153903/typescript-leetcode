import { canAttendMeetings } from "../../src/algo-curated/meeting-rooms-252";

describe("Meeting Rooms", () => {
  test.each`
    i    | intervals                          | result
    ${1} | ${[[0, 30], [5, 10], [15, 20]]}    | ${false}
    ${2} | ${[[7, 10], [2, 4]]}               | ${true}
    ${3} | ${[[0, 30], [60, 240], [90, 120]]} | ${false}
  `("Case #$i", ({ intervals, result }) => {
    expect(canAttendMeetings(intervals)).toBe(result);
  });
});
