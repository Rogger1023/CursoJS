// Crie uma função para verificar se um valor é truthy
function verificar(v) {
  if (v === true) {
    console.log('é verdadeiro');
  } else {
    console.log('é falso');
  }
}
verificar(false);

//Crie uma função matematica que retorne o perímetro de um quadrado
//Lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroQuadrado(p) {
  return 4 * p;
}
console.log(perimetroQuadrado(5));

//Crie uma funcao que retorne seu nome completo
//ela deve possuir os parametros: nome e sobrenome

function nome(n, s) {
  return console.log(`${n} ${s}`);
}
nome('rogger', 'samuel');

// Crie uma função que verifica se um número é par
function nPar(n) {
  if (n % 2 == 0) {
    return 'é par';
  } else {
    return 'é impar';
  }
}
console.log(nPar(1));
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipo(tipo) {
  return typeof tipo;
}
console.log(tipo('Rogger'));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function () {
  console.log('scrollou');
});
// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  var totalPaises = 193;
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
