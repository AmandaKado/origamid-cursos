var pessoa = {
    nome: 'André',
    idade: 28,
}

var quadrado = {
    lados: 4,
    area(lado) {
        return lado * lado;
    },
    perimetro(lado) {
        return this.lados *lado;
    },
    cinco() {
        return 5;
    },
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

console.log(Math.random());

console.table(quadrado);


var height = 100;
var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
    metadeHeight() {
        return this.height / 2;
    }
}


menu.backgroundColor = '#000';
menu.color = 'blue';
menu.esconder = function() {
    console.log('Esconder');
};


var bg = menu.backgroundColor;

