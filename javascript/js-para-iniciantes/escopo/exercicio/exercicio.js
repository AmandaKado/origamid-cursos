// Por qual motivo o código abaixo retorna com erros?

const carro = {
    marca: 'Fiat',
    cor: 'Preto',
    portas: 4,
}

{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
    console.log(cor, marca, portas)
} 

console.log(carro.marca, carro.cor, carro.portas);

// Como corrigir o erro abaixo?
function soma(somarDois, dois) {
    const soma = somarDois + dois;
    return console.log(soma);
}
soma(4,2);

function divisao(dividirDois, dois) {
    const divisao = dividirDois / dois;
    return console.log(divisao);
}

divisao(6, 2)


// O que fazer para total retornar 500?
const numero = 50;

for(let numero = 0; numero < 10; numero++) {
console.log(numero);
}



const total = 10 * numero;
console.log(total);