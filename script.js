// Your JS goes here
//test line
var body = document.getElementsByTagName('body')[0];
var tiles = [];
  for (var i = 0; i < 63; i++) {
    tiles[i] = document.createElement('div');
    tiles[i].style.width = "11.1%";
    tiles[i].style.paddingBottom = '11.1%';
    tiles[i].style.float = "left";
    tiles[i].style.backgroundColor = rndColor();
    body.appendChild(tiles[i]);
  }


 function rndColor() {
     var hex = ['0', '1', '2', '3', '4', '5', '6', '7',
                '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'],
         color = '#', i;
     for (i = 0; i < 6 ; i++) {
         color = color + hex[Math.floor(Math.random() * 16)];
     }
     return color;
 }
