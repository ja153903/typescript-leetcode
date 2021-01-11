function canAttendMeetings(intervals: number[][]): boolean {
  intervals.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }

    return a[0] - b[0];
  });

  const stack: number[][] = [];

  for (const interval of intervals) {
    if (stack.length === 0) {
      stack.push(interval);
    } else {
      const top: number[] = stack[stack.length - 1];

      if (top[1] > interval[0]) {
        return false;
      }

      stack.push(interval);
    }
  }

  return true;
}

export { canAttendMeetings };
