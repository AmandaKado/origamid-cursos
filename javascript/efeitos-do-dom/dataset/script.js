const div = document.querySelector('[data-cor]');

console.log(div.dataset.cor);

div.dataset.height = 1000;

console.log(div);

delete div.dataset.width;

