function Carro(marcaAtribuido, precoAtribuido) {
    this.marca = marcaAtribuido;
    this.preco = precoAtribuido;
};

const honda = new Carro('Honda', 2000);
const fiat = new Carro('Fiat', 4000);

function Carro2(marca, precoInicial) {
    this.taxa = 1.2;
    console.log(this);
    const precoFinal = precoInicial * this.taxa;
    this.marca = marca;
    console.log(this);
    this.preco = precoInicial;
    console.log(this);
};

const mazda = new Carro2('Mazda', 5000);
