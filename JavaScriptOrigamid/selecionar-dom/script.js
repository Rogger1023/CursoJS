// Retorne no console todas as imagens do site
const imgSite = document.querySelectorAll('img');
// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagem = document.querySelectorAll('[src^="img/imagem"]');
// Selecione todos os links internos (onde o href começa com #)
const links = document.querySelectorAll('[href^="#"]');
// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector('.animais-descricao h2');
// Selecione o último p do site
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[--paragrafos.length]);
