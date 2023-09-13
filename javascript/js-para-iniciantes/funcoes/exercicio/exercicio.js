// Crie uma função para verificar se um valor é Truthy
function valor(numero) {
 return !!numero;
}
console.log(valor(''));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(lado) {
  return lado * 4;
}

perimetro(2)

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
/*function nomeCompleto(nome, sobrenome) {
  const nomeCompleto = nome + ' ' + sobrenome;
  console.log(nomeCompleto);
}*/

function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}` ;
}

nomeCompleto('Amanda', 'Kado');

// Crie uma função que verifica se um número é par
function par(numero) {
  if(numero % 2 === 0 ) {
    console.log('par');
  } else {
    console.log('impar');
  }
}

par(2);

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)


function argumento(tipo) {
  return typeof tipo;
}




// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.
addEventListener('click', function() { 
  console.log('Amanda Mayumi Kado'); 
});

// Corrija o erro abaixo

var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisiter(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
