function areaQuadrado(lado) {
    return lado * lado;
}

console.log(areaQuadrado(2));

function pi() {
    return 3.14;
  }
  
  var total = 5 * pi(); // 15.7
  console.log(pi())

function imc(peso, altura) {
    var imc = peso / (altura * altura);
    return imc;
}

console.log(imc(80, 1.8));


function corFavorita(cor) {
    if(cor === 'azul') {
        return 'Eu gosto do céu';
    } else if (cor === 'verde') {
        return 'Eu gosto de mato';
    } else {
        return 'Eu não gosto de cores';
    }
}

console.log(corFavorita('azul'));


function mostraConsole() { 
    console.log('Oi');
}
addEventListener('click', mostraConsole);
  
// peso e altura são os parâmetros
function imc2(peso, altura) {
    const imc = peso / (altura ** 2);
    return imc;
  }
  
  imc2(80, 1.80) // 80 e 1.80 são os argumentos
  imc2(60, 1.70) // 60 e 1.70 são os argumentos

  console.log(imc2(65, 1.60));

  function terceiraIdade(idade) {
    if(typeof idade !== 'number') {
        return 'Por favor preencha um número';
    }
    if(idade >= 60) {
        return true;
    } else {
        return false;
    }
  }

  console.log(terceiraIdade(60));

  function faltaVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Faltam visitar ${totalPaises - paisesVisitados} países`;
  }

  console.log(faltaVisitar(20));



  var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); // Retorna 'André, 29, Rio de Janeiro, Designer'
//outrosDados(); // retorna um erro

  