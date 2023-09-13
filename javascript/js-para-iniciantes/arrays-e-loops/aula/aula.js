

//var ultimoItem = videoGames.pop();

for (var numero = 1; numero <= 4; numero++) {
    console.log(numero);
}

var i = 0;
while (i < 4) {
  console.log(i);
  i++;
}
// Retorna de 0 a 9 no console

var videoGames = ['Switch', 'PS5', 'XBox', '3DS'];

for (var item = 0; item < videoGames.length; item++) {
    console.log(videoGames[item]);
    if(videoGames[item] === 'PS5') {
        break;
    }
}

var frutas = ['Banana', 'Pera', 'Maçã', 'Abacaxi', 'Uva'];

frutas.forEach(function(fruta, index, array) {
    frutas.pop();
    console.log(fruta, index, array);
})