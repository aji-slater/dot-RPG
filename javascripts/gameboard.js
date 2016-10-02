function gameBoard(optionsObject) {
  if (!optionsObject) {optionsObject = {};}

  this.dotSize = optionsObject.dotSize;
  this.gutterSize = optionsObject.gutterSize;
  this.rowColumnNumber = optionsObject.rowColumnNumber;
}

gameBoard.prototype.instantiate = function() {
  var board = document.createElement('div');
  board.className = 'gameboard';
  board.style.height = this.calculateBoardSize();
  board.style.width = this.calculateBoardSize();

  document.querySelector('body').appendChild(board);
};

gameBoard.prototype.calculateBoardSize = function() {
  var totalDots = this.dotSize * this.rowColumnNumber;
  var totalGutters = this.gutterSize * (this.rowColumnNumber - 1);
  return (totalDots + totalGutters).toString() + 'px';
};
