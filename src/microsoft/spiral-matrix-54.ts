function spiralOrder(matrix: number[][]): number[] {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let lr: number = 0;
  let rr: number = rows - 1;

  let lc: number = 0;
  let rc: number = cols - 1;

  const result: number[] = [];

  // Easier solution here would be to keep track of the size of the array
  // we would also have to keep track of this within the loop itself

  while (result.length < rows * cols) {
    // Go from left to right in terms of columns
    for (let i = lc; i <= rc && result.length < rows * cols; i++) {
      result.push(matrix[lr][i]);
    }
    lr++; // increment row because we've already used it up

    for (let i = lr; i <= rr && result.length < rows * cols; i++) {
      result.push(matrix[i][rc]);
    }
    rc--;

    for (let i = rc; i >= lc && result.length < rows * cols; i--) {
      result.push(matrix[rr][i]);
    }
    rr--;

    for (let i = rr; i >= lr && result.length < rows * cols; i--) {
      result.push(matrix[i][lc]);
    }
    lc++;
  }

  return result;
}

export { spiralOrder };
