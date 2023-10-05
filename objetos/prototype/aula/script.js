function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
};

Pessoa.prototype.andar = function() {
    return this.nome + ' Pessoa andou';
};

const andre = new Pessoa('André', 28);

console.log(Pessoa.prototype);