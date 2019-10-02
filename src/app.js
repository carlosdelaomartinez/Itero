import Game from './game'
import GameView from './gameView'
//need to be able to switch between foreground
// need to be able to switch between background
// need to be  abel to toggle which one is in view and is active
// when they are not toggled they need to be moved to their perspective view
  //on toggle change the backdropp to a sunset mood
  // move the level around the character
  // generate gaps the rule is that the screen must be filled but the gaps 
  // will be generated randomly with a set min width
document.addEventListener('DOMContentLoaded', () => {
  const gameCanvas = document.querySelector('canvas');
  gameCanvas.width = Game.X_DIMS;
  gameCanvas.height = Game.Y_DIMS;

  const context = gameCanvas.getContext('2d');
  const game = new Game();
  new GameView(game, context).begin();
})




