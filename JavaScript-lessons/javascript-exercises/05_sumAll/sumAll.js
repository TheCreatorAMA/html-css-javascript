const sumAll = function (num1, num2) {
  if (Array.from(arguments).length > 2) {
    return 'ERROR';
  } else if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return 'ERROR';
  } else if (num1 < 0 || num2 < 0) {
    return 'ERROR';
  }

  let big = num1 < num2 ? num2 : num1;
  let small = num1 > num2 ? num2 : num1;

  let sum = 0;

  for (let i = small; i <= big; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
