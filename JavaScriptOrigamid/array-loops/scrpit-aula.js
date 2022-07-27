for (let numero = 0; numero <= 10; numero++) {
  console.log(numero);
}

var i = 0;
while (i < 10) {
  console.log(i);
  i = i + 5;
}

var videoGames = ['switch', 'ps4', 'xbox', '3ds'];

for (var item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item]);
  if (videoGames[item] == 'ps4') {
    break;
  }
}
var frutas = ['laranja', 'tangerina', 'banana', 'maçã'];

frutas.forEach(function (item, index, array) {
  frutas.pop();
  console.log(item, index, array);
});
