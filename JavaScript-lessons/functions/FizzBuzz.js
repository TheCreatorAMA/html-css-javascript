let answer = parseInt(prompt('Please enter a positive number greater than one you would like to FizzBuzz up to: '));

for (let i = 1; i <= answer; i++) {
  let output = '';

  if (i % 3 == 0) {
    output += 'Fizz';
  }

  if (i % 5 == 0) {
    output += 'Buzz';
  }

  console.log(output === '' ? i : output);
}
