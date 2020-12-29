import MyQueue from "../../src/microsoft/implement-queue-using-stacks-232";

test("implement-queue-using-stacks-232 case 1", () => {
  const queue = new MyQueue();

  queue.push(1);
  queue.push(2);

  expect(queue.peek()).toBe(1);
  expect(queue.pop()).toBe(1);
});
