export default function corFundo() {
    const fundo = document.querySelector('body');
    setInterval(() => {
        fundo.classList.toggle('vermelho');
}, 2000);
};