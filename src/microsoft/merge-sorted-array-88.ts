function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = 0;
  let j = 0;
  const result: number[] = [];

  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      result.push(nums1[i]);
      i++;
    } else {
      result.push(nums2[j]);
      j++;
    }
  }

  while (i < m) {
    result.push(nums1[i]);
    i++;
  }

  while (j < n) {
    result.push(nums2[j]);
    j++;
  }

  result.forEach((value, index) => {
    nums1[index] = value;
  });
}

export { merge };
