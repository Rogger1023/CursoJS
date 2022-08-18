// Verifique a distância da primeira imagem
// em relação ao topo da página
const distancia = document.querySelector('img');
const distanciaImg = distancia.offsetTop;
// Retorne a soma da largura de todas as imagens
function somaImagens() {
  const imagens = document.querySelectorAll('img');
  let soma = 0;

  // criando um looping para fazer a soma automaticamente
  imagens.forEach((imagem) => {
    soma = soma + imagem.offsetWidth;
    console.log(imagem.offsetWidth);
  });
  console.log(soma);
}
window.onload = function () {
  somaImagens();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a');
links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;
  if (linkWidth >= 48 && linkHeight >= 48) {
    console.log(link, 'Possui acessibilidade');
  } else {
    console.log(link, 'Nao possui acessibilidade');
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const broserSmall = window.matchMedia('(max-width: 720px)').matches;
if (broserSmall) {
  const menu = document.querySelector('.menu');
  menu.classList.add('menu-mobile');
}
