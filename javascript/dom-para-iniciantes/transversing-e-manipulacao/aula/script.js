// const h1 = document.querySelector('h1');
// const animaisLista = document.querySelector('.animais-descricao');

// console.log(h1.innerHTML);
// console.log(h1.outerHTML);

// h1.outerHTML = '<p>Novo Titulo</p>';

// // console.log(animaisLista.innerText);

// const lista = document.querySelector('.animais-lista');

// console.log(lista.children[lista.children.length - 1]);
// console.log(lista.querySelector('li:last-child'));

// console.log(lista.previousSibling);

// const animais = document.querySelector('.animais');
// const contato = document.querySelector('.contato');
// const titulo = contato.querySelector('.titulo');
// const mapa = document.querySelector('.mapa');

// contato.replaceChild(lista, titulo);

// // contato.insertBefore(animais, mapa);

// const novoh1 = document.createElement('h1');
// novoh1.innerText = 'Novo título';
// novoh1.classList.add('titulo');

// mapa.appendChild(novoh1);

const h1 = document.querySelector('h1');
const faq = document.querySelector('.faq');

const cloneh1 = h1.cloneNode(true);

cloneh1.classList.add('azul');

faq.appendChild(cloneh1);
