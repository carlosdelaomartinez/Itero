import Level from './level'
import Player from './player';

class Game {
  static Y_DIMS = 600;
  static X_DIMS = 1000;
  constructor() {
    this.peicesToDraw = { paths: {}, player: '' };
    this.level = new Level(this);
    this.level.pushStartRoads()
    this.addPlayer();
    this.spaceOccupied = 0
  }
  addPlayer(){
    this.peicesToDraw.player = (new Player())
  }
  colorBackground(ctx) {
    ctx.fillStyle = "#4CD8FA";
    ctx.fillRect(0, 0, Game.X_DIMS, Game.Y_DIMS);
  }
  continueAddingRoads(time){
    this.level.pushMoreRoads(Game.X_DIMS, time)
  }

  step(timeShift){
    this.checkForPlatformCollisions()
    for (let pathKey in this.peicesToDraw.paths) {
      this.peicesToDraw.player.move(timeShift)
      let path = this.peicesToDraw.paths[pathKey];
      if (path.first === true && path.xpos + path.minWidth  <= 0) {
        // console.log('adding roads')
        this.continueAddingRoads(timeShift)
        // console.log('path to delete', path)
        delete this.peicesToDraw.paths[pathKey]
        // console.log(this.game.peicesToDraw.paths[pathKey])
      } else if ((path.xpos + path.minWidth ) <= 0) {

        this.spaceOccupied -= path.minWidth + path.offset;
        delete this.peicesToDraw.paths[pathKey];
      } else {
        path.move(timeShift)
      }
    }
    console.log(Object.keys(this.peicesToDraw.paths).length)
  }

  checkForPlatformCollisions() {
    const { player } = this.peicesToDraw
    for (let pathKey in this.peicesToDraw.paths) {

      let ground = this.peicesToDraw.paths[pathKey]


      if (player.xpos < ground.xpos + ground.minWidth &&
        player.xpos + player.width > ground.xpos &&
        player.ypos < ground.ypos + ground.height &&
        player.ypos + player.height > ground.ypos
        
      ) {
        // debugger
        console.log('OVERLAP')
        ground.color = 'blue';
        player.color = 'blue'
        ground.velY = -5;

      } else {
        setTimeout(() => {
          player.color = 'red'
        }, 10000);
      }
    }
  }
  
  
}

export default Game;