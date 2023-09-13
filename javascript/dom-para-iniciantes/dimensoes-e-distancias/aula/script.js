const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;
console.log(animaisTop);

const primeiroh2 = document.querySelector('h2');
const h2left = primeiroh2.offsetLeft;
console.log(h2left);

const rect = primeiroh2.getBoundingClientRect();
console.log(rect);

if(rect.top)

console.log(
  window.innerWidth,
  window.outerWidth,
  window.innerHeight,
  window.outerHeight,
  window.pageYOffset,
);



const small = window.matchMedia('(max-width: 600px)').matches;

if(small) {
  console.log('Usuário mobile');
} else {
  console.log('Usuário desktop');
};