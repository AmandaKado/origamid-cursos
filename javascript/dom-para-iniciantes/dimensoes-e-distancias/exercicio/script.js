// Verifique a distância da primeira imagem
// em relação ao topo da página

const primeiraImagem = document.querySelector('img');
const altura = primeiraImagem.offsetTop;
console.log(altura);

// Retorne a soma da largura de todas as imagens

function somaImagens() {
  const imagens = document.querySelectorAll('img');
  let soma = 0;
  imagens.forEach((imagem) => {
    soma = soma + imagem.offsetWidth;
});
  console.log(soma);
};

window.onload = function() {
  somaImagens();
}
// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');

links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;
  if(linkWidth >= 48 && linkHeight >= 48) {
    console.log(link, 'Possui acessibilidade');
  } else {
    console.log(link, 'Não possui acessibilidade');
  };
});

console.log(links);

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const small = window.matchMedia('(max-width: 720px)');
const menu = document.querySelector('.menu');

if(small.matches) {
  menu.classList.add('menu-mobile');
};
