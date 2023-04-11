function solution(D) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const sums = [0, 0, 0, 0, 0, 0, 0];
  const counts = [0, 0, 0, 0, 0, 0, 0];

  for (const date in D) {
    const dayOfWeek = new Date(date).getDay();
    sums[dayOfWeek] += D[date];
    counts[dayOfWeek]++;
  }

  for (let i = 1; i < 6; i++) {
    if (counts[i] === 0) {
      const prevDay = (i - 1 + 7) % 7;
      const nextDay = (i + 1) % 7;
      sums[i] = (sums[prevDay] + sums[nextDay]) / 2;
    }
  }

  const output = {};
  for (let i = 0; i < 7; i++) {
    output[days[i]] = sums[i];
  }

  return output;
}

module.exports = solution;
