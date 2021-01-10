// If we break this problem down, we really just want to find the substrings of continuous same elements
// once we find that substring, then we can use math to figure out how many substrings it can form
// The intuition behind this problem is as follows
// if a string repeats n times, then it forms
// n * (n + 1) / 2 valid substrings
function countLetters(S: string): number {
  let j = 0;
  let res = 0;

  for (let i = 1; i <= S.length; i++) {
    if (i == S.length || S[i] !== S[j]) {
      // whenever the characters are now different or if we hit the end
      // then we have the add the number of valid substrings from the formula
      // above
      res += Math.floor(((i - j) * (i - j + 1)) / 2);
      j = i;
    }
  }

  return res;
}

export { countLetters };
