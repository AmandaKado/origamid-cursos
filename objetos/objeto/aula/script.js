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

console.log(Object.getOwnPropertyDescriptors(moto));

const innerHeightConfig = Object.getOwnPropertyDescriptor(window, 'innerHeight');

console.log(innerHeightConfig.configurable);

console.log(Object.keys(moto));
console.log(Object.values(moto));
console.log(Object.entries(moto));

const frutas = ['Banana'];

console.log(Object.getPrototypeOf(frutas));
console.log(Object.getPrototypeOf(''));
console.log(Array.prototype);

const frutas1 = ['Banana', 'Pêra'];
const frutas2 = ['Banana', 'Pêra'];
const novaFruta = frutas1;

console.log(Object.is(frutas1, frutas2));
console.log(Object.is(frutas1, novaFruta));

novaFruta[0] = 'Uva';

console.log(Object.is(frutas1, novaFruta));

const carro = {
    marca: 'Ford',
    ano: 2018,
}

// Object.seal(carro);
Object.preventExtensions(carro);
carro.portas = 4;
delete carro.marca;
carro.marca = 'Honda';

console.log(carro);
console.log(Object.isFrozen(carro));
console.log(Object.isExtensible(carro));
console.log(Object.isSealed(carro));