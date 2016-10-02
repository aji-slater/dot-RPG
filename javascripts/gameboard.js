function gameBoard(optionsObject) {
  if (!optionsObject) {optionsObject = {};}

}

gameBoard.prototype.instantiate = function() {
  var board = document.createElement('div');
  board.className = 'gameboard';
  board.style.height = this.calculateBoardSize();
  board.style.width = this.calculateBoardSize();

  document.querySelector('body').appendChild(board);
};

gameBoard.prototype.calculateBoardSize = function() {
  var totalDots = dots.game.dotSize * dots.game.rowColumnNumber;
  var totalGutters = dots.game.gutterSize * (dots.game.rowColumnNumber - 1);
  return (totalDots + totalGutters).toString() + 'px';
};
