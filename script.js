// Your JS goes here
var body = document.getElementsByTagName('body')[0];
var tiles = [];
for (var i = 0; i < 63; i++) {
  tiles[i] = document.createElement('div');
  tiles[i].style.width = "11.1%";
  tiles[i].style.paddingBottom = '11.1%';
  tiles[i].style.float = "left";
  if ((i % 2) === 0) {
    tiles[i].style.backgroundColor = 'black';
   } else {
     tiles[i].style.backgroundColor = 'red';
   }
  body.appendChild(tiles[i]);
 }
