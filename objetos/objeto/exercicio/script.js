// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll('p');

const totalLetras = Array.from(paragrafos).reduce((acumulador, paragrafo) => {
    return acumulador + paragrafo.textContent.length;
}, 0);

console.log(totalLetras);
// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function criarElemento(tag, classe, conteudo) {
    const elemento = document.createElement(tag);
    if (classe) {
        elemento.classList.add('classeEscolhida');
    };
    if (conteudo) {
        elemento.textContent = conteudo;
    };
    return elemento;
};

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

function outroElemento(conteudo) {
    const elemento = document.createElement('h1');

    const addClasse = elemento.classList.add('titulo');

    if (conteudo) {
        elemento.textContent = conteudo;
    };

    return elemento;
}

let texto = outroElemento('Eu adoro batata')

document.body.appendChild(texto);

const novoElemento = criarElemento('p', 'destaque', 'Este é o meu novo elemento');
document.body.appendChild(novoElemento);

