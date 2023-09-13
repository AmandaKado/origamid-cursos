// Retorne no console todas as imagens do site

const imagens = document.querySelectorAll('img');

console.log(imagens);

// Retorne no console apenas as imagens que começaram com a palavra imagem

const animaisLista = document.querySelectorAll('.animais-lista img');

console.log(animaisLista);

const imagensAnimais = document.querySelectorAll('img[src^="/img/imagem"]');

console.log(imagensAnimais);

// Selecione todos os links internos (onde o href começa com #)

const linksInternos = document.querySelectorAll('[href^="#"]');

console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao

const primeiroH2 = document.querySelector('h2');
console.log(primeiroH2);

// Selecione o último p do site
const ultimoP = document.querySelector('.copy p');
console.log(ultimoP);

const paragrafos = document.querySelectorAll('p');

console.log(paragrafos[paragrafos.length - 1]);
