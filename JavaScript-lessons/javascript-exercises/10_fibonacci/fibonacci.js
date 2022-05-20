const fibonacci = function (num, memo = { 0: 0, 1: 1, 2: 1 }) {
  if (num < 0) {
    return 'OOPS';
  }

  if (memo[num]) {
    return memo[num];
  }

  memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);

  return memo[num];
};

// Do not edit below this line
module.exports = fibonacci;
