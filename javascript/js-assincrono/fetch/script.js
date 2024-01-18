const cep = fetch('https://viacep.com.br/ws/88220000/json');

cep.then(resolucao => resolucao.json()) 
    .then(body => {
        console.log(body.cep);
        const conteudo = document.querySelector('.conteudo');
        conteudo.innerTexto = body.cep;
    });