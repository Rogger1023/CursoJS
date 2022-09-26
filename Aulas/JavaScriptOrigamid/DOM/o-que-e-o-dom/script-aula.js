const href = window.location.href;

console.log(href);

if (
  href ===
  'http://127.0.0.1:5500/JavaScriptOrigamid/DOM/o-que-e-o-dom/index.html'
) {
  console.log('é igual');
}

const h1Selecionada = document.querySelector('h1');
const h1Classes = h1Selecionada.classList;

function callbackh1() {
  console.log('cliclou em', h1Selecionada.innerText);
}

h1Selecionada.addEventListener('click', callbackh1);
