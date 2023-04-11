const solution = require("./solution");

test("Basic test case", () => {
  const input = {
    "2020-01-01": 4,
    "2020-01-02": 4,
    "2020-01-03": 6,
    "2020-01-04": 8,
    "2020-01-05": 2,
    "2020-01-06": -6,
    "2020-01-07": 2,
    "2020-01-08": -2,
  };
  const expectedOutput = {
    Sun: -6,
    Mon: 2,
    Tue: 4,
    Wed: 6,
    Thu: 8,
    Fri: 8,
    Sat: 2,
  };
  expect(solution(input)).toEqual(expectedOutput);
});

test("Test case with missing days", () => {
  const input = {
    "2020-01-01": 8,
    "2020-01-04": 12,
    "2020-01-05": 14,
    "2020-01-07": 4,
    "2020-01-08": 2,
  };
  const expectedOutput = {
    Sun: 14,
    Mon: 2,
    Tue: 4,
    Wed: 6,
    Thu: 8,
    Fri: 10,
    Sat: 12,
  };
  expect(solution(input)).toEqual(expectedOutput);
});

test("Test case with negative values", () => {
  const input = {
    "2020-01-01": -4,
    "2020-01-02": -4,
    "2020-01-03": -6,
    "2020-01-04": -8,
    "2020-01-05": -2,
    "2020-01-06": 6,
    "2020-01-07": -2,
    "2020-01-08": 2,
  };
  const expectedOutput = {
    Sun: 6,
    Mon: -2,
    Tue: -4,
    Wed: -6,
    Thu: -8,
    Fri: -8,
    Sat: -2,
  };
  expect(solution(input)).toEqual(expectedOutput);
});
