const DIRS = [
  [0, 1],
  [1, 0],
  [-1, 0],
  [0, -1],
];

function orangesRotting(grid: number[][]): number {
  let freshOranges = 0;
  let minutes = 0;
  const queue: number[][] = [];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j]);
      } else if (grid[i][j] === 1) {
        freshOranges++;
      }
    }
  }

  if (freshOranges === 0) {
    return 0;
  }

  // now perform bfs
  while (queue.length > 0) {
    const n = queue.length;

    for (let i = 0; i < n; i++) {
      const front = queue.shift() ?? null;

      if (front === null) {
        break;
      }

      const x = front[0];
      const y = front[1];

      for (const dir of DIRS) {
        const dx = dir[0];
        const dy = dir[1];

        const nx = x + dx;
        const ny = y + dy;

        if (
          nx < 0 ||
          ny < 0 ||
          nx >= grid.length ||
          ny >= grid[0].length ||
          grid[nx][ny] !== 1
        ) {
          continue;
        }

        queue.push([nx, ny]);
        grid[nx][ny] = 2;
        freshOranges--;
      }
    }

    minutes++;
  }

  return freshOranges === 0 ? minutes - 1 : -1;
}

export { orangesRotting };
