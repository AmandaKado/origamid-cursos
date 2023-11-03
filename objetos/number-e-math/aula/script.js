console.log(Number.isNaN(NaN));
console.log(Number.isNaN(5));
console.log(Number.isNaN('fasdfaf'));

console.log(Number.isInteger(5));
console.log(Number.isInteger(5.5));

console.log(parseFloat(' 324234.343'))
console.log(parseFloat('100.27 reais'))
console.log(parseInt('100.27 reais'))
console.log(parseInt(23.39))

const preco = 10.312323;
console.log(+preco.toFixed() + 3232)

let valor = 46.87;
valor = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
console.log(valor);

console.log(Math.PI);
const matematica = {
    PI: 3.14,
};
console.log(matematica.PI);

console.log(Math.abs(3 - 7));
console.log(Math.ceil(4.8545454));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.8545454));
console.log(Math.floor(4.1));
console.log(Math.round(4.8545454));
console.log(Math.round(4.1));

console.log(Math.max(3, 43, 42343, 324));
console.log(Math.min(3, 43, 42343, 324));

const aleatorio = Math.floor(Math.random() * 500);
console.log(aleatorio);

const aleatorioEntre = Math.floor(Math.random() * (40 - 20 + 1)) + 20;
console.log(aleatorioEntre);
