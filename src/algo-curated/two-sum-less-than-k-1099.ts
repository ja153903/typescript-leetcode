function twoSumLessThanK(nums: number[], k: number): number {
  let maxSum = Number.MIN_VALUE;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] < k) {
        maxSum = Math.max(maxSum, nums[i] + nums[j]);
      }
    }
  }

  return maxSum === Number.MIN_VALUE ? -1 : maxSum;
}

export { twoSumLessThanK };
