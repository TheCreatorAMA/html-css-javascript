const palindromes = function (str) {
  let cleanedStr = str.replace(/[^a-z]/gi, '').toLowerCase();
  let reverse = cleanedStr.split('').reverse().join('');

  return cleanedStr === reverse;
};

// Do not edit below this line
module.exports = palindromes;
