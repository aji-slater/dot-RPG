function Dot(optionsObject) {
  this.height = dots.game.dotSize;
  this.width = dots.game.dotSize;
  this.row = optionsObject.row;
  this.col = optionsObject.col;
  this.color = optionsObject.color;
}

//////////////////////////// HIGH LEVEL DEFINITIONS

Dot.prototype.instantiate = function() {
  var newDot = document.createElement('div');
  this.setStyle(newDot);

  document.querySelector('.gameboard').appendChild(newDot);
}

//////////////////////////// SPECIFICS

Dot.prototype.colorChart = {
  '1': 'rgb(23, 97, 196)',
  '2': 'rgb(226, 27, 27)',
  '3': 'rgb(87, 59, 11)',
  '4': 'rgb(76, 170, 53)',
  '5': 'rgb(225, 238, 51)',
  '6': 'rgb(173, 0, 255)'
};

Dot.prototype.parseColorVariable = function(colorID) {
  return this.colorChart[colorID.toString()];
}

Dot.prototype.setStyle = function(el) {
  el.style.borderRadius = '50%';
  el.style.backgroundColor = this.parseColorVariable(this.color);
  el.style.height = this.height.toString() + 'px';
  el.style.width = this.width.toString() + 'px';
  
};
