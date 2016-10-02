window.DOTS = {};
dots = window.DOTS;

document.addEventListener('DOMContentLoaded', function(event) {
  dots.game.init();

});

dots.game = {
  init: function() {
    dots.gameBoard = new gameBoard({
      dotSize: 20,
      gutterSize: 5,
      rowColumnNumber: 15
    }).instantiate();
  }
}
