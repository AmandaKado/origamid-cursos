const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
const primeiroValor = comidas.shift();
console.log(primeiroValor);
// Remova o último valor de comidas e coloque em uma variável
const ultimoValor = comidas.pop();
console.log(ultimoValor);
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array

comidas.push('Arroz');
comidas.unshift('Peixe', 'Batata')
console.log(comidas);

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
estudantes.sort();
// Inverta a ordem dos estudantes
estudantes.reverse();
// Verifique se Joana faz parte dos estudantes
console.log(estudantes.includes('Joana'));
// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes('Juliana'));

console.log(estudantes);

let html = `<section>
                <div>Sobre</div>
                <div>Produtos</div>
                <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join

html = html.split('section').join('ul').split('div').join('li');

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
let arrayOriginal = carros.slice();
console.log(arrayOriginal);
console.log(carros.pop());
console.log(carros);
