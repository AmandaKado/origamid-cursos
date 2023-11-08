// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = document.querySelectorAll('.curso');

// const cursosArray = [];

// cursos.forEach(curso => {
//     const titulo = curso.querySelector('h1').textContent;
//     const descricao = curso.querySelector('p').textContent;
//     const aulas = curso.querySelector('.aulas').textContent;
//     const horas = curso.querySelector('.horas').textContent;

//     const cursoObj = {
//         titulo: titulo,
//         descricao: descricao,
//         aulas: aulas,
//         horas: horas,
//     };

//     cursosArray.push(cursoObj);
// });

// console.log(cursosArray);

const arrayCursos = Array.from(cursos);

const objetoCurso = arrayCursos.map((curso) => {
    const titulo = curso.querySelector('h1').innerText;
    const descricao = curso.querySelector('p').innerText;
    const aulas = curso.querySelector('.aulas').innerText;
    const horas = curso.querySelector('.horas').innerText;
    return {
        titulo,
        descricao,
        aulas,
        horas,
    };
})
console.log(objetoCurso);
// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const numeroMaior100 = numeros.filter(maior => maior > 100);

console.log(numeroMaior100);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

// const buscaBaixo = instrumentos.find((instrumento) => {
//     if(instrumento === 'Baixo') {
//         console.log(true);
//     };
// });

// const elementoBuscado = 'Baixo';

// const resultado = instrumentos.includes(elementoBuscado);

const possuiBaixo = instrumentos.some((item) => {
    return item === 'Baixo';
});

console.log(possuiBaixo);

// Retorne o valor total das compras
const compras = [
    {
        item: 'Banana',
        preco: 'R$ 4,99'
    },
    {
        item: 'Ovo',
        preco: 'R$ 2,99'
    },
    {
        item: 'Carne',
        preco: 'R$ 25,49'
    },
    {
        item: 'Refrigerante',
        preco: 'R$ 5,35'
    },
    {
        item: 'Quejo',
        preco: 'R$ 10,60'
    }
]; 

const precos = compras.map(compra => compra.preco);

const valores = precos.map(valor => {
    const numeroLimpo = Number(valor.replace('R$ ', '').replace(',', '.'));
    return numeroLimpo;
});

const somaTotal = valores.reduce((acumulador, atual) => {
    return acumulador + atual;
}, 0);

console.log(somaTotal);