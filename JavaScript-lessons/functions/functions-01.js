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
document.addEventListener('DOMContentLoaded', () => {
  const textbox = document.querySelector('#textBox');
  console.log(textbox);
  const output = document.querySelector('#output');

  textbox.addEventListener('keydown', (event) => (output.textContent = `you pressed ${event.key}`));
});
