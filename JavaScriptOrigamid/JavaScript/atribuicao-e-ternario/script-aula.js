'use strict';
function mostrarCarro() {
  var carro = 'Fusca';
  console.log(carro);
}
mostrarCarro();
//console.log(carro); //O escopo da de funcao só funciona dentro dela

if (true) {
  let mes = 'dezembro';
  console.log(mes);
}
//console.log(mes);
var i = 100;
/*for (let i = 0; i < 10; i++) {
  console.log(`Numero ${i}`);
}
console.log(i);
*/
const semana = 'sexta'; // constante nao muda
//semana = 'quinta'; <-- nao pode
//const semana = 'quinta'; <-- nao pode
console.log(semana);

//objetos com constante podem ter sua propriedades modificadas e adicionadas
const data = {
  ano: 2018,
  mes: 'janeiro',
};
data.ano = 2022;
data.dia = 28;

let ano;
ano = 2018;
ano++;
console.log(ano);
