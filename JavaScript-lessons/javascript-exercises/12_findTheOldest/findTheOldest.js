const findTheOldest = function () {
  let people = arguments[0];

  return people.reduce((prevPerson, curPerson) => {
    let currentYear = new Date().getFullYear();

    let prevPersonAge;
    let curPersonAge;

    if (prevPerson === 0) {
      prevPersonAge = 0;
    } else if (prevPerson.yearOfDeath) {
      prevPersonAge = prevPerson.yearOfDeath - prevPerson.yearOfBirth;
    } else {
      prevPersonAge = currentYear - prevPerson.yearOfBirth;
    }

    if (curPerson.yearOfDeath) {
      curPersonAge = curPerson.yearOfDeath - curPerson.yearOfBirth;
    } else {
      curPersonAge = currentYear - curPerson.yearOfBirth;
    }

    return prevPersonAge > curPersonAge ? prevPerson : curPerson;
  }, 0);
};

// Do not edit below this line
module.exports = findTheOldest;
