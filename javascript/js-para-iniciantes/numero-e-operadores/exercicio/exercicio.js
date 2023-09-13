// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
console.log(total);

// Crie duas expressões que retornem NaN

var nan1 = +'Número 23';
console.log(nan1);

var nan2 = 'palavra';
var soma = nan2 / 30;
console.log(soma);

// Somar a string '200' com o número 50 e retornar 250

var a = +'200';
console.log(a + 50);
console.log(typeof a);

// Incremente o número 5 e retorne o seu valor incrementado

var incrementado = 5;
console.log(++incrementado);

// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = numero / 2 + unidade; // NaN (Not a Number)

console.log(pesoPorDois);
