var pessoa = {
  nome: 'rogger',
  idade: 25,
  sexo: 'masculino',
};
var quadrado = {
  lados: 4,
  //area: function(lado){}
  area(lado) {
    return lado * lado;
  },
  //perimetro: function(lado){}
  perimetro(lado) {
    return this.lados * lado;
  },
  cinco() {
    return 5;
  },
};
var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
  metadeHeight() {
    return this.height / 2;
  },
};

menu.backgroundColor = '#000';

menu.color = 'blue';

menu.esconder = function () {
  console.log('escondi');
};
var bg = menu.backgroundColor;
