function compress(chars: string[]): number {
  if (chars.length === 0) {
    return 0;
  }

  const result: string[] = [];

  let prev: string = chars[0];
  let count: number = 1;

  for (let i = 1; i <= chars.length; i++) {
    if (i === chars.length) {
      result.push(count > 1 ? `${prev}${count}` : prev);
    } else if (prev === chars[i]) {
      count++;
    } else {
      result.push(count > 1 ? `${prev}${count}` : prev);
      prev = chars[i];
      count = 1;
    }
  }

  const resultStr = result.join("");

  for (let i = 0; i < resultStr.length; i++) {
    chars[i] = resultStr[i];
  }

  return resultStr.length;
}

export { compress };
