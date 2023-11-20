// Crie uma função que verifique
// corretamente o tipo de dado
const objetoQualquer = {
    item1: 1,
    item2: 2,
    item3: 3,
};

function verificacao(verificar) {
    return Object.prototype.toString.call(verificar);
};

console.log(verificacao([]));
console.log(verificacao('frase'));
console.log(verificacao(2));
console.log(verificacao(function(){}));
console.log(verificacao(objetoQualquer));


// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

// const quadrado = {
//     lados: 4,
// };

// Object.freeze(quadrado);
// quadrado.tamanho = 'grande';
// console.log(quadrado);

const quadrado = {};
Object.defineProperties(quadrado, {
    lados: {
        value: 4,
        enumerable: true,
    }
});

quadrado.lados = 30;
console.log(quadrado);

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
    width: 800,
    height: 600,
    background: '#333'
}

Object.freeze(configuracao);
  // Liste o nome de todas
  // as propriedades do
  // protótipo de String e Array

console.log(Object.getOwnPropertyNames(Array.prototype));
console.log(Object.getOwnPropertyNames(String.prototype));

