function calculate(s: string): number {
  const nums: number[] = [];
  let num = 0;
  let sign = "+";
  s = s.trim();

  for (let i = 0; i < s.length; i++) {
    if (s[i] >= "0" && s[i] <= "9") {
      num = num * 10 + Number.parseInt(s[i]);
    }

    if (i === s.length - 1 || "+-*/".includes(s[i])) {
      let value;
      switch (sign) {
        case "+":
          nums.push(num);
          break;
        case "-":
          nums.push(-num);
          break;
        case "*":
          value = nums.pop() ?? 1;
          nums.push(value * num);
          break;
        case "/":
          value = nums.pop() ?? 1;
          if (value < 0) {
            value = Math.ceil(value / num);
          } else {
            value = Math.floor(value / num);
          }
          nums.push(value);
          break;
      }

      num = 0;
      sign = s[i];
    }
  }

  return nums.reduce((prev, curr) => prev + curr);
}

export { calculate };
