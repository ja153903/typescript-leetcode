function modifyString(s: string): string {
  // for this problem, we don't need more than 3 letters
  // to create a non-repeating character sequence
  const chars = s.split("");

  for (let i = 0; i < chars.length; i++) {
    if (chars[i] !== "?") {
      continue;
    }

    if (chars[i - 1] !== "a" && chars[i + 1] !== "a") {
      chars[i] = "a";
    } else if (chars[i - 1] !== "b" && chars[i + 1] !== "b") {
      chars[i] = "b";
    } else {
      chars[i] = "c";
    }
  }

  return chars.join("");
}

export { modifyString };
