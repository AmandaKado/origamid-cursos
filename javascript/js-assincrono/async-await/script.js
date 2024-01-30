// async function puxarDados() {
//     try {
//         const responseDados = await fetch('./dados.json');
//         const jsonDados = await responseDados.json();
    
//         document.body.innerText = jsonDados.aula;
//     } catch (erro) {
//         console.log(erro);
//     }
// }

// puxarDados();

async function puxarDados() {
    const promiseDados =  fetch('./dados.json');
    const responseClientes = fetch('./clientes.json');
    const jsonDados = await (await promiseDados).json();
    const jsonClientes = await (await responseClientes).json();
    console.log(jsonDados);
    console.log(jsonClientes);
}

puxarDados();

async function asyncSemPromise() {
    await new Promise(resolve => {
        setTimeout(() => {
            console.log('Depois de 1s');
            resolve();
        }, 1000);
    }) 
    console.log('Acabou');
}

asyncSemPromise();