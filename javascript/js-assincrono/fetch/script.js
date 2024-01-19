const cep = fetch('https://viacep.com.br/ws/88220000/json');

// cep.then(resolucao => resolucao.json()) 
//     .then(body => {
//         console.log(body.cep);
//         const conteudo = document.querySelector('.conteudo');
//         conteudo.innerTexto = body.cep;
//     });

cep.then(r => {
    const r2= r.clone()
    r.text().then((text) => {
        console.log(text);
    });
    r2.json().then((json) => {
        console.log(json);
    });
    console.log(r);
})
.then(body => {
    console.log(body);
});

const array = ['item 1', 'item 2' ,'item 3'];

array.forEach(console.log);

cep.then(response => {
    console.log(response.status);
    console.log(response.url);
    console.log(response.type);
    if(response.status === 404) {
        console.log('Página não existe');
    } else {
        console.log('Encontrado');
    };
});