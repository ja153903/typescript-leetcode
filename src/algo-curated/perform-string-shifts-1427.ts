function stringShift(s: string, shift: number[][]): string {
  // if direction is 0, then subtract shift
  // if direction is 1, then add shift

  let totalShift: number = shift.reduce(
    (prev, [direction, magnitude]) =>
      prev + (direction === 0 ? -magnitude : magnitude),
    0
  );

  if (totalShift < 0) {
    totalShift = Math.abs(totalShift) % s.length;
    totalShift = s.length - totalShift;
  } else {
    totalShift %= s.length;
  }

  // once we have our total shift, we want to remap all the characters in the list
  const result: string[] = new Array(s.length);

  for (let i = 0; i < s.length; i++) {
    result[(i + totalShift) % s.length] = s[i];
  }

  return result.join("");
}

export { stringShift };
