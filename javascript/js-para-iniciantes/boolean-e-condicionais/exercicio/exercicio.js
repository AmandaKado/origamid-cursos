// Verifique se a sua idade é maior do que a de algum parente
var idade = 22;
var idadeParente = 24;
var maior = idadeParente > idade;
var menor = idadeParente < idade;
var igual = idadeParente === idade;

switch (idade > idadeParente) {
    case maior:
        console.log('É maior');
        break;
    case menor:
        console.log('É menor');
        break;
    case igual:
        console.log('É igual');
        break;
    default:
        console.log('Não é uma idade válida')
}
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);

console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; //true
var idade = 28; //true
var possuiDoutorado = false; //false
var empregoFuturo; //false
var dinheiroNaConta = 0; //false

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
    console.log('Brasil tem mais habitantes');
} else {
    console.log('Brasil tem menos habitantes');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}