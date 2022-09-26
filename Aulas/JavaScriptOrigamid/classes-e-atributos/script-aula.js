const menu = document.querySelector('.menu');
menu.classList.add('ativo');
menu.classList.remove('azul');

if (menu.classList.contains('azul')) {
  menu.classList.add('possui-azul');
} else {
  menu.classList.add('nao-possui-azul');
}
const animais = document.querySelector('.animais');

console.log(animais.attributes);

const imagem = document.querySelector('img');
const altImg = imagem.getAttribute('alt');

imagem.setAttribute('alt', 'é uma reposa');

const possuiAlt = imagem.hasAttribute('title');
console.log(possuiAlt);
console.log(altImg);

const carro = {
  portas: 4,
  andar(km) {
    console.log(`Andou ${km}`);
  },
};
