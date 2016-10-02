window.DOTS = {};
dots = window.DOTS;

document.addEventListener('DOMContentLoaded', function(event) {
  dots.game.init();

});

dots.game = {
  init: function() {
    dots.gameBoard = new Gameboard({
      dotSize: '20px',
      gutterSize: '5px'
    });
  }
}
