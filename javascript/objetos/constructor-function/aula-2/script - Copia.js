function Dom(seletor) {
    this.element = function() {
        return document.querySelector(this.seletor);
    };
    this.ativar = function(classe) {
        this.element().classList.add(classe);
    };
};

const li = new Dom('li');
const ul = new Dom('ul');
const lastLi = new Dom('li: last-child');
lastLi.ativar('ativar');