// const pessoa = new Object({
//     nome: 'André'
// });

// console.log(pessoa);

// const carro = {
//     rodas: 4,
//     init(valor) {
//         this.marca = valor;
//         return this;
//     },
//     acelerar() {
//         return this.marca + ' acelerou';
//     },
//     buzinou() {
//         return this.marca + ' buzinou';
//     }
// };

// const honda = Object.create(carro);
// honda.marca = 'Honda';

// console.log(honda);
// console.log(carro);
// console.log(honda.buzinou());
// console.log(honda.acelerar());
// console.log(honda.init('Fiat'));

// const ferrari = Object.create(carro).init('Ferrari');
// console.log(ferrari);

// const moto = {
//     rodas: 2,
//     capacete: true,
// };

// const funcaoAutomovel = {
//     acelerou() {
//         return 'Acelerou';
//     },
//     buzinou() {
//         return 'Buzinou';
//     },
// };

// Object.assign(moto, funcaoAutomovel, carro);
// console.log(moto);

const moto = {
    capacete: true,
};

Object.defineProperties(moto, {
    rodas: {
        get() {
            return this._rodas;
        },
        set(valor) {
            this._rodas = valor * 4;
        }
    }
})

console.log(moto);