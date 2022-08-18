const listaAnimais = document.querySelector('.animais-lista');
const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;

const primeiroH2 = document.querySelector('h2');
const primeiro = primeiroH2.offsetLeft;

const rect = primeiroH2.getBoundingClientRect();
if (rect.top < 0) {
  console.log('passou do elemento');
}
console.log(window.innerWidth, window.outerWidth, window.pageYOffset);

const small = window.matchMedia('(max-width: 600px)');
if (small) {
  console.log('usuario mobile');
} else {
  console.log('usuario desktop');
}
