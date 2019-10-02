import Level from './level'

class Game {
  static Y_DIMS = 600;
  static X_DIMS = 1000;
  static PeicesToDraw = [];
  constructor() {
    
    this.level = new Level();
    this.level.pushStartRoads()
    console.log(Game.PeicesToDraw)
  }
  colorBackground(ctx) {
    ctx.fillStyle = "#4CD8FA";
    ctx.fillRect(0, 0, Game.X_DIMS, Game.Y_DIMS);
  }
  continueAddingRoads(){
    this.level.pushMoreRoads(Game.X_DIMS)
  }

  loadPaths(ctx) {
    // this.newPaths = this.generateLengthPojos(this.minLengthRequirement);
    // console.log('these paths are new',this.newPaths)
    // setInterval(() => {
    //   if(this.newPaths[0].length === 1){
    //     this.newPaths = this.generateLengthPojos(300);
    //   }
    //   this.paths[0].shift()
    //   this.paths[1].shift()
    //   this.paths[2].shift()
    //   this.paths[0].push(this.newPaths[0].shift())
    //   this.paths[1].push(this.newPaths[1].shift())
    //   this.paths[2].push(this.newPaths[2].shift())
    //   this.level.renderRoads(this.paths[0], this.paths[1], this.paths[2])
    // }, 1);
  }
  // want to be able to make pojos of a given length 
  // can be used for difficulty
  
}

export default Game;