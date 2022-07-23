function areaQuadrado(lado) {
  return lado * lado;
}

function pi() {
  return 3.14;
}
function imc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc;
}
function corFavorita(cor) {
  if (cor === 'azul') {
    return 'Eu gosto de azul';
  } else if (cor === 'verde') {
    return 'Eu gosto de verde';
  } else {
    return 'Eu nao gosto de cores';
  }
}
addEventListener('click', function () {
  console.log('Clicou');
});

function imc2(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}

function terceiraIdade(idade) {
  if (typeof idade !== 'number') {
    return 'Por favor preencha um numero';
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
  console.log(idade);
}

function faltaVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Faltam visitar ${totalPaises - paisesVisitados} paises`;
}

var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}
console.log(dados());
//outrosDados();

//console.log(terceiraIdade('testando'));
//imc2(40, 1.8);
