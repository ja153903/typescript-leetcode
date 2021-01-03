interface Pair<T, S> {
  first: T;
  second: S;
}

function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  if (numCourses === 0) {
    return [];
  }

  const incoming: number[] = new Array(numCourses).fill(0);
  // Make sure that when you create a graph, you do not set the same reference within fill
  const graph: number[][] = new Array(numCourses).fill(0).map(() => []);
  const visited: boolean[] = new Array(numCourses).fill(false);
  const result: number[] = [];

  prerequisites.forEach(([inc, out]) => {
    incoming[inc]++;
    graph[out].push(inc);
  });

  const queue: number[] = incoming
    .map(
      (value, index): Pair<number, number> => ({ first: value, second: index })
    )
    .filter((pair) => pair.first === 0)
    .map((pair) => pair.second);

  while (queue.length > 0) {
    const n = queue.length;

    for (let i = 0; i < n; i++) {
      const front = queue.shift() ?? -1;

      if (!visited[front]) {
        result.push(front);
        visited[front] = true;
      }

      // go through its children
      for (const child of graph[front]) {
        if (incoming[child] > 0) {
          incoming[child]--;

          if (incoming[child] === 0) {
            queue.push(child);
          }
        }
      }
    }
  }

  for (const value of incoming) {
    if (value > 0) {
      return [];
    }
  }

  return result;
}

export { findOrder };
