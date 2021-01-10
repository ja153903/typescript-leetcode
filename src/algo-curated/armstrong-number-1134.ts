function isArmstrong(N: number): boolean {
  const nums = [];

  let copy = N;

  while (copy > 0) {
    nums.push(copy % 10);
    copy = Math.floor(copy / 10);
  }

  const k = nums.length;

  return (
    nums.map((num) => Math.pow(num, k)).reduce((prev, curr) => prev + curr) ===
    N
  );
}

export { isArmstrong };
