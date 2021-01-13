function validWordSquare(words: string[]): boolean {
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      try {
        if (words[i][j] !== words[j][i]) {
          return false;
        }
      } catch {
        return false;
      }
    }
  }

  return true;
}

export { validWordSquare };
