window.DOTS = {};
dots = window.DOTS;

document.addEventListener('DOMContentLoaded', function(event) {
  dots.game.createGameBoard();
  dots.gameBoard.populate();
});

dots.game = {
  dotSize: 20,
  gutterSize: 5,
  rowColumnNumber: 15,

  createGameBoard: function() {
    dots.gameBoard = new gameBoard({
      dotSize: dots.dotSize,
      gutterSize: dots.gutterSize,
      rowColumnNumber: dots.rowColumnNumber
    });
    dots.gameBoard.instantiate();
  }
}
