function Board(optionsObject) {
  if (!optionsObject) {optionsObject = {};}

  this.dotSize = optionsObject.dotSize;
  this.gutterSize = optionsObject.gutterSize;
}

Board.prototype.instantiate = function() {
  var board = document.createElement('div');
  
};
