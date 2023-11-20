// const comida = 'Pizza';
// const agua = new String('Água');
// const frase = 'A melhor comida';

// console.log(agua.length);

// console.log(frase[frase.length -1])

// console.log(frase.charAt(0));

// console.log(frase.charAt(frase.length -1));

const frase = 'A melhor linguagem é ';
const linguagem = 'JavaScript';
const fraseFinal = frase.concat(linguagem, '!!', ' ', 'Olá mundo'); 

const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

console.log(listaFrutas.includes(fruta));
console.log(listaFrutas.includes(fruta, 14));

console.log(fruta.includes(listaFrutas)); 

console.log(fruta.startsWith('Ba'));
console.log(fruta.startsWith('ba')); 

console.log(fruta.endsWith('Na'));
console.log(fruta.endsWith('na')); 

const transacao1 = 'Depósito de Cliente';
const transacao2 = 'Depósito de Fornecedor';
const transacao3 = 'Taxa de Camisas';

console.log(transacao1.slice(0, 3));
console.log(transacao2.slice(0, 3));
console.log(transacao3.slice(0, 3));
console.log(transacao1.slice(12));
console.log(transacao1.slice(-4));
console.log(transacao1.slice(3, 6));

console.log(linguagem.substring(3, 5));
console.log(linguagem.substring(0, 4));
console.log(linguagem.substring(4));
console.log(linguagem.substring(-3)); //não funciona

console.log(fruta.indexOf('na'));
console.log(fruta.lastIndexOf('na'));

const preco = 'R$ 99,00';

console.log(preco.padStart(20, '.'));
console.log(preco.padEnd(20, '.'));

const listaPreco = ['R$ 99,90', 'R$ 199', 'R$ 120000'];

listaPreco.forEach((item) => {
    console.log(item.padStart(20, "-"));
});

const frase2 = 'Ta';

frase.repeat(5);

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';

listaItens = listaItens.replace(/[ ]+/g, ', ');

const arrayLista = listaItens.split(', ');

console.log(arrayLista);

const htmlText = '<div> O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');

console.log(htmlArray);

const frutasArray = ['Banana', 'Melancia', 'Laranja'];
console.log(frutasArray.join(', '));

const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

console.log(sexo1.toLowerCase() === 'feminino');

const valor = '    R$ 23.00     ';
console.log(valor.trim());
console.log(valor.trimEnd());
console.log(valor.trimStart());