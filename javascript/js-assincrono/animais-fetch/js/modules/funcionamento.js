export default function initFuncionamento() {
    const funcionamento = document.querySelector('[data-semana]');
    const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
    const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);
    const dataAgora = new Date();
    const diaAgora = dataAgora.getDay();
    const horarioAgora = dataAgora.getHours();
    const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;

    const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]);

    if(semanaAberto && horarioAberto) {
        funcionamento.classList.add('aberto');
    };
};


// function transformarDias(tempo) {
//     return tempo / (24 * 60 * 60 * 1000);
// };

// const agora = new Date();

// console.log(agora);
// console.log(agora.getTime());
// console.log(agora.getFullYear());
// console.log(agora.getDay());

// const futuro = new Date('Dec 24 2024 23:59');

// console.log(futuro);
// console.log(futuro.getTime());
// console.log(futuro.getFullYear());
// console.log(futuro.getDay());

// const diasAgora = transformarDias(agora.getTime());
// const diasFuturo = transformarDias(futuro.getTime());

// console.log(diasFuturo - diasAgora);



