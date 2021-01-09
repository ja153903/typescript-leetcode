function calculateTime(keyboard: string, word: string): number {
  let result = 0;
  let prev = 0;

  for (let i = 0; i < word.length; i++) {
    const currentCode = keyboard.indexOf(word[i]) ?? 0;
    result += Math.abs(currentCode - prev);
    prev = currentCode;
  }

  return result;
}

export { calculateTime };
