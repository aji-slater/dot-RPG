function gameBoard(optionsObject) {
  if (!optionsObject) {optionsObject = {};}
  this.dots = [];
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

gameBoard.prototype.populate = function() {
  for (var x = 1; x <= dots.game.rowColumnNumber; x++) {
    for (var y = 1; y <= dots.game.rowColumnNumber; y++) {

      var dot = new Dot({
                      row: y,
                      col: x,
                      color: Dot.randomColor()
                    });

      dots.gameBoard.dots.push(dot);
    }
  }
};
