function searchRange(nums: number[], target: number): number[] {
  if (nums.length === 0) {
    return [-1, -1];
  }

  const left = search(nums, target);
  if (left === nums.length || nums[left] !== target) {
    return [-1, -1];
  }

  const right = search(nums, target + 1);

  return [left, right - 1];
}

function search(nums: number[], target: number): number {
  let start = 0;
  let end = nums.length;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);

    if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return start;
}

export { searchRange };
