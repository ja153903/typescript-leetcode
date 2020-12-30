function permute(nums: number[]): number[][] {
  const result: number[][] = [];
  const visited: Set<number> = new Set();

  permuteHelper(nums, result, [], visited);

  return result;
}

function permuteHelper(
  nums: number[],
  result: number[][],
  subresult: number[],
  visited: Set<number>
) {
  if (subresult.length === nums.length) {
    result.push([...subresult]);
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (visited.has(i)) {
        continue;
      }

      subresult.push(nums[i]);
      visited.add(i);

      permuteHelper(nums, result, subresult, visited);

      subresult.pop();
      visited.delete(i);
    }
  }
}

export { permute };
