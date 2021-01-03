import { findOrder } from "../../src/microsoft/course-schedule-ii-210";

describe("210. Course Schedule II", () => {
  test("Case 1", () => {
    const numCourses = 4;
    const prerequisites = [
      [1, 0],
      [2, 0],
      [3, 1],
      [3, 2],
    ];

    expect(findOrder(numCourses, prerequisites)).toEqual([0, 1, 2, 3]);
  });

  test("Case 2", () => {
    const numCourses = 2;
    const prerequisites = [[1, 0]];

    expect(findOrder(numCourses, prerequisites)).toEqual([0, 1]);
  });

  test("Case 3", () => {
    const numCourses = 3;
    const prerequisites = [
      [2, 1],
      [1, 0],
    ];

    expect(findOrder(numCourses, prerequisites)).toEqual([0, 1, 2]);
  });

  test("Case 4", () => {
    const numCourses = 3;
    const prerequisites = [
      [1, 0],
      [1, 2],
      [0, 1],
    ];

    expect(findOrder(numCourses, prerequisites)).toEqual([]);
  });
});
