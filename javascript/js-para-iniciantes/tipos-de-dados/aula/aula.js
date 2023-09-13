var nome = 'Amanda';
var idade = 22;
var time;
var comida = null;
var simbolo = Symbol();
console.log(typeof nome, idade, time, comida, simbolo);

var nome = 'Amanda';
var sobrenome = 'Kado';
var nomeCompleto = nome + ' ' + sobrenome;
console.log(nomeCompleto);

var gols = 1000;
var frase = 'Romário fez ' + gols + ' gols';
console.log(frase);
console.log(typeof frase) 

var ano = '2018';
var mes = 8;


var frase1 = 'Esse é o "melhor" jogo';
var frase2 = 'Esse é o \'melhor\' jogo';
console.log(frase1 + ' = ' + frase2);

var gols = 1000;
var frase3 = `Romário fez ${gols * 2} gols`;
console.log(frase3);