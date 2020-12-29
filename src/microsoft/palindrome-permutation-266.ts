function canPermutePalindrome(s: string): boolean {
  // what is the structure of a palindrome?
  // Two cases for this
  // 1. the frequencies of all the characters in a string are even
  // 2. the frequencies of all but one character in a string are even
  // A proposed solution to this problem would be to create a counter
  // via a hashmap which then keeps track of the frequencies of all characters
  const counter: Map<string, number> = new Map();

  for (let i = 0; i < s.length; i++) {
    counter.set(s[i], (counter.get(s[i]) || 0) + 1);
  }

  return [...counter.values()].filter((value) => value % 2 === 1).length <= 1;
}

export { canPermutePalindrome };
