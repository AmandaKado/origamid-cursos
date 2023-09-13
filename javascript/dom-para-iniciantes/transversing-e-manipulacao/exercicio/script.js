// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');

const menuClone = menu.cloneNode(true);

copy.appendChild(menuClone);

// Selecione o primeiro DT da dl de Faq

const faqDt = document.querySelector('.faq-lista');

const primeiroDt = faqDt.children[0];

// Selecione o DD referente ao primeiro DT

const dtPai = document.querySelector('dt');

const primeiroDd = dtPai.nextElementSibling;

// Substitua o conteúdo html de .faq pelo de .animais

const faq = document.querySelector('.faq');
const animais = document.querySelector('.animais');
const contato = document.querySelector('.contato');

faq.innerHTML = animais.innerHTML;

