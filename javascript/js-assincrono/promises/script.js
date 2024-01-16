// const promesa = new Promise((resolve, reject) => {
//     let condicao = true;
//     if(condicao) {
//         setTimeout(() => {
//             resolve({nome: 'Amanda', idade: 23});
//         }, 2000);
//     } else {
//         reject(Error('Ocorreu um erro na promise'));
//     };
// });

// const retorno = promesa
// .then(resolucao => {
//     console.log(resolucao);
//     resolucao.profissao = 'Designer';
//     return resolucao;
// })
// .then(resolucao => {
//     console.log(resolucao);
// })
// .catch(rejeitada => {
//     console.log(rejeitada);
// })
// .finally(() => {
//     console.log('Acabou');
// });

// console.log(retorno);

const login = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Usuário Logado')
    }, 1000)
})

const dados = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Dados Carregados')
    }, 500)
})

// const carregouTudo = Promise.all([login, dados]);

const carregouTudo = Promise.race([login, dados]);


carregouTudo.then((resolucao) => {
    console.log(resolucao)
})