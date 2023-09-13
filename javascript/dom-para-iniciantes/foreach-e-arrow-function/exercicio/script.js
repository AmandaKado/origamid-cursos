// Mostre no console cada parágrado do site

const paragrafo = document.querySelectorAll('p');

console.log(paragrafo);

paragrafo.forEach((p) => console.log(p));

// Mostre o texto dos parágrafos no console

paragrafo.forEach((p) => console.log(p.innerText));

// Como corrigir os erros abaixo:

const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => console.log(item, index));

let i = 0;
imgs.forEach(() => console.log(i++));

imgs.forEach(() => i++);

console.log(i);
