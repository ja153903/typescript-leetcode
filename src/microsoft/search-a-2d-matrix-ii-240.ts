/**
 * There's a brute force method that will take quadratic time to search for the value
 * However, we know that it is sorted and can take advantage of knowing the order that the values
 * come in.
 *
 * One way we can solve this problem. Is to keep track of two pointers: the row and column
 * However, we start the column at the end while the row starts at 0
 *
 * If the current value we have that matrix[row][column] == target, then we return true
 * If the current value is less than the target, then we have to decrement column
 * Otherwise we increment row
 */
function searchMatrix(matrix: number[][], target: number): boolean {
  let row = 0;
  let col = matrix[0].length - 1;

  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] === target) {
      return true;
    } else if (matrix[row][col] > target) {
      col--;
    } else {
      row++;
    }
  }

  return false;
}

export { searchMatrix };
