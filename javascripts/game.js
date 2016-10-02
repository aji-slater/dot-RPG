window.DOTS = {};
dots = window.DOTS;

document.addEventListener('DOMContentLoaded', function(event) {
  dots.game.init();

});

dots.game = {
  dotSize: 20,
  gutterSize: 5,
  rowColumnNumber: 15,

  init: function() {
    dots.gameBoard = new gameBoard({
      dotSize: dots.dotSize,
      gutterSize: dots.gutterSize,
      rowColumnNumber: dots.rowColumnNumber
    }).instantiate();
  }
}
