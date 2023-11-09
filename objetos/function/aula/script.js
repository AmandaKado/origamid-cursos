// // const perimetro = new Function('lado', 'return lado * 4');

// // console.log(perimetro(5));

// // function somar(n1, n2) {
// //     return n1 +n2;
// // };

// // console.log(somar(3, 3));
// // console.log(somar.length);
// // console.log(somar.name.toUpperCase());

// // function darOi(nome, idade) {
// //     console.log(`Oi para você ${nome} ${idade}`);
// // };

// // darOi.call(null, 'André', 28);

// // window.marca = 'Carro';
// // window.ano = 2332;

// // function descricaoCarro() {
// //     console.log(this);
// //     console.log(this.marca + ' ' + this.ano);
// // };

// // descricaoCarro.call({marca: 'Honda', ano: 2025}, 100);

// const carros = ['Ford', 'Fiat', 'VW'];
// const frutas = ['Banana', 'Uva', 'Pera'];

// carros.forEach.call(frutas, (item) => {
//     console.log(item);
// });

// function Dom(seletor) {
//     console.log(this);
//     this.element = document.querySelector(seletor);
// };

// Dom.prototype.ativo = function(classe) {
//     console.log(this);
//     // this.element.classList.add(classe);
// };

// // const ul = new Dom('ul');

// const li = {
//     element: document.querySelector('li'),
// };

// // ul.ativo('Ativar');

// Dom.prototype.ativo.call(li, 'ativar');

// // ul.ativo.call(li, 'Ativar');

const frutas = ['Uva', 'Maça', 'Banana'];

// Array.prototype.mostrarThis = function() {
//     console.log(this);
// };

Array.prototype.pop.call(frutas);
frutas.pop();

console.log(frutas);

const arrayLike = {
    0: 'Item 1',
    1: 'Item 2',
    2: 'Item 3',
    3: 'Item 4',
    length: 4,
};

console.log(arrayLike);

const li = document.querySelectorAll('li');

const filtro = Array.prototype.filter.call(li, (item) => {
    return item.classList.contains('ativo');
});

console.log(filtro);

console.log(li);