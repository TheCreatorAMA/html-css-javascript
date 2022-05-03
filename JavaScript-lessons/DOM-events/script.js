const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content';

// Adding a p tag
const content2 = document.createElement('p');
content2.classList.add('content');
content2.textContent = 'This is a p tag';

const content3 = document.createElement('h3');
content3.classList.add('content');
content3.style.cssText = 'color: blue;';
content3.textContent = 'Im a h3 tag';

const newDiv = document.createElement('div');
newDiv.style.cssText = `
background-color: pink;
border: 1px solid black;
`;

const divC1 = document.createElement('h1');
divC1.textContent = 'Im in a div';

const divC2 = document.createElement('p');
divC2.textContent = 'ME TOO!';

newDiv.append(divC1, divC2);

container.append(content, content2, content3, newDiv);
