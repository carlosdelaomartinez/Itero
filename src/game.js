import Level from './level'
import Player from './player';

class Game {
  static Y_DIMS = 600;
  static X_DIMS = 1000;
  static PeicesToDraw = {paths: [], player: '' };
  constructor() {
    
    this.level = new Level();
    this.level.pushStartRoads()
    this.addPlayer();
  }
  addPlayer(){
    Game.PeicesToDraw.player = (new Player())
  }
  colorBackground(ctx) {
    ctx.fillStyle = "#4CD8FA";
    ctx.fillRect(0, 0, Game.X_DIMS, Game.Y_DIMS);
  }
  continueAddingRoads(){
    this.level.pushMoreRoads(Game.X_DIMS)
  }

  
}

export default Game;