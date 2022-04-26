// function hello() {
//   console.log('Hello');
// }

// hello();

// // If you want the function to have default parameters you can use the below:
// function hello2(greeting = 'hello') {
//   console.log(greeting);
// }

// hello2();
// hello2('Wassup');

// // Anonymous functions / arrow functions
// // usually are functions that are passed to other functions
// a = () => {
//   console.log('hello 3');
// };

// a();

// let arr1 = [1, 2, 3];
// arr1 = arr1.map((item) => item * 2);

// console.log(arr1);
// useable example of arrow functions
// the DOMContentLoaded event listener helps with making sure all elements are loaded before using querySelector
// document.addEventListener('DOMContentLoaded', () => {
//   const textbox = document.querySelector('#textBox');

//   const output = document.querySelector('#output');

//   textbox.addEventListener('keydown', (event) => (output.textContent = ``));
// });

// function squared(num) {
//   return num * num;
// }

// function cubed() {
//   return num * num * num;
// }

// function factorial(num) {
//   if (num < 0) return undefined;
//   if (num == 0) return 1;

//   let x = num - 1;
//   while (x > 1) {
//     num *= x;
//     x--;
//   }

//   return num;
// }

// function favAnimal(animal) {
//   console.log(animal + ' is my favorite animal');
// }

// console.log(favAnimal('Goat'));

// Function scope
// let user = 'John';

// function showMessage() {
//   let user = 'Alex';
//   let message = `Hello ${user}`;

//   alert(message);
// }

// alert(user);
// showMessage();
// alert(user);

function min(a, b) {
  return a < b ? a : b;
}

console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));
