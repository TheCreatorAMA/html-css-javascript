const removeFromArray = function () {
  let inputs = Array.from(arguments);
  let array = inputs.splice(0, 1)[0];

  for (let item of inputs) {
    if (array.indexOf(item) !== -1) {
      array.splice(array.indexOf(item), 1);
    }
  }

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
