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
      if (path.first === true && path.xpos + path.width  <= 0) {
        // console.log('adding roads')
        this.continueAddingRoads(timeShift)
        // console.log('path to delete', path)
        delete this.peicesToDraw.paths[pathKey]
        // console.log(this.game.peicesToDraw.paths[pathKey])
      } else if ((path.xpos + path.width ) <= 0) {
        delete this.peicesToDraw.paths[pathKey];
      } else {
        path.move(timeShift)
      }
    }
    // console.log(Object.keys(this.peicesToDraw.paths).length)
  }

  checkForPlatformCollisions() {
    const { player } = this.peicesToDraw
    for (let pathKey1 in this.peicesToDraw.paths) {
      const path1 = this.peicesToDraw.paths[pathKey1]
      for (let pathKey2 in this.peicesToDraw.paths){
        
        const path2 = this.peicesToDraw.paths[pathKey2]
        if (path1.id !== path2.id && this.checkCollision(path1, path2) === true){
          console.log(path1.id !== path2.id)
          if (path1.ypos > path1.xpos){
            path2.velY -= 1;
            path1.velY = 0;
            path2.velX -= 1
            path1.velX = 0;
            path2.color = 'green'
            path1.color = 'blue'



          }
          
        }
      }
  
      

      if (this.checkCollision(player, path1)) {
        // debugger
        console.log('OVERLAP')
        path1.color = 'blue';
        player.color = 'blue'
        path1.velY += player.velY/2;
        path1.velX += player.velX/2;
        player.velY = 0;
      } else {
        setTimeout(() => {
          player.color = 'red'
        }, 10000);
      }
    }
  }
  checkCollision(obj1, obj2){
    return (obj1.xpos < obj2.xpos + obj2.width &&
      obj1.xpos + obj1.width > obj2.xpos &&
      obj1.ypos < obj2.ypos + obj2.height &&
      obj1.ypos + obj1.height > obj2.ypos &&
      obj1.ypos !== obj2.ypos)
  }
  
}

export default Game;