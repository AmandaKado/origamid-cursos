// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(nome, idade) {
this.nome = nome;
this.idade = idade;
};

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const joao = new Pessoa('João', 20);

const maria = new Pessoa('Maria', 25);

const bruno = new Pessoa('Bruno', 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:

function Dom() {
    this.node = 'NodeList()';
    const elements = document.querySelectorAll('*');
};

//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

