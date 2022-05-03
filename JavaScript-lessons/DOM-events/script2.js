const btn2 = document.querySelector('#btn2');
btn2.onclick = () => alert('hello world 2');

const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', (e) => {
  console.log(e.target);
  console.log((e.target.style.background = 'blue'));
  alert('hello world 3');
});

// Apply multiple event listeners to multiple DOM elements
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    alert(button.id);
  });
});
