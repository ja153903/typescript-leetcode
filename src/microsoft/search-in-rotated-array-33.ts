function search(nums: number[], target: number): number {
  // Use binary search to find the smallest value in the array
  const n = nums.length;
  let left: number = 0;
  let right: number = n - 1;

  while (left < right) {
    const mid: number = Math.floor(left + ((right - left) >> 1));

    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  // left will contain the smallest number which gives us the point for pivoting
  let pivot: number = left;

  left = 0;
  right = n - 1;

  while (left <= right) {
    const mid: number = Math.floor(left + ((right - left) >> 1));
    const trueMid: number = (mid + pivot) % n;

    if (nums[trueMid] === target) {
      return trueMid;
    } else if (nums[trueMid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

export { search };
