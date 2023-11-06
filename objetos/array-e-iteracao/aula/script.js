// const carros = ['Ford', 'Fiat', 'Honda'];

// carros.forEach((item, index, array) => {
//     console.log(item.toUpperCase(), index, array);
// });

// console.log(carros);

// const li = document.querySelectorAll('li');
// li.forEach(item => item.classList.add('ativa'));

// li.forEach(function(item) {
//     item.classList.add('ativa');
// });

// const carros = ['Ford', 'Fiat', 'Honda'];

// carros.forEach((item, index, array) => array[index] = 'Carro ' + item);

//Essa não é melhor forma de fazer isso, o melhor é utilizando "map"

// const carros = ['Ford', 'Fiat', 'Honda'];

// const novaArray = carros.map((item, index, array) => {
//     return item.toUpperCase();
// });

// console.log(novaArray);

// const numeros = [2, 3, 5, 65, 344];

// const numerosX2 = numeros.map(n => n * 2);

// console.log(numerosX2);

// const aulas = [
//     {
//         nome: 'HTML 1',
//         min: 15
//     },
//     {
//         nome: 'HTML 2',
//         min: 35
//     },
//     {
//         nome: 'CSS 1',
//         min: 10
//     },
//     {
//         nome: 'JS 1',
//         min: 13
//     },
// ];

// const tempoAulas = aulas.map((aula) => aula.min);

// console.log(tempoAulas);

// const arrayNomeAulas = aulas.map(function(aula){
//     return aula.nome;
// });

// console.log(arrayNomeAulas);

// const nomeAulas = function(aula) {
//     return aula.nome;
// };

// const aulas = [10, 25, 30];

// const total1 = aulas.reduce((acumulador, atual) => {
//     return acumulador + atual;
// }, 0);
// console.log(total1);

const numeros = [2, 4, 565, 34, 55, 43];

const maiorNumero = numeros.reduce((anterior, atual) => anterior > atual ? anterior : atual, 0);

console.log(maiorNumero);