const imgs = document.querySelectorAll('img');

// ()=> é a msm coisa que function(){}
imgs.forEach((item, index, array) => {
  //console.log(item, index, array);
});

//convertendo array like em array propriamente dito
const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach((item) => {
  console.log(item);
});
