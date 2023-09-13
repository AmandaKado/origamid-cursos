// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var dados = {
  nome: 'Amanda',
  sobrenome: 'Kado',
  idade: 22,
  sexo: 'Feminino',
}

dados.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`;
}

// Crie um método no objeto anterior, que mostre o seu nome completo

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: 'Labrador',
  cor: 'Preto',
  idade: 10,
  latir: function(pessoa) {
    if(pessoa === 'Homem') {
      console.log('Au Au');
    } else {
      console.log('...');
    }
  },
}

