const imgs = document.querySelectorAll('img');
console.log(imgs);

// let i = 0;
// imgs.forEach(function(item, index, array){
//     console.log(item, index, array);
// });

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach((item) => {
  console.log(item);
});

// let i = 0;
// imgs.forEach((item, index) => {
//     console.log(i++);
// });

let i = 0;
imgs.forEach((item, index) => console.log(i++));