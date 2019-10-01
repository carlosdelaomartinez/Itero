import Level from './level'

class Game {
  static Y_DIMS = 600;
  static X_DIMS = 1000;
  constructor() {
    this.minLengthRequirement = 100;
    this.minHeight = 100;
    this.optLength = 0;
  }
  colorBackground(ctx) {
    ctx.fillStyle = "#4CD8FA";
    ctx.fillRect(0, 0, Game.X_DIMS, Game.Y_DIMS);
  }

  loadPaths(ctx) {
    this.paths = this.generateLengthPojos(this.minLengthRequirement);
    // this.newPaths = this.generateLengthPojos(this.minLengthRequirement);
    this.level = new Level(ctx)
    this.level.renderRoads(this.paths[0], this.paths[1], this.paths[2], this.minLengthRequirement, this.minHeight, this.optLength);
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
  generateLengthPojos(minLengthRequirement) {
    const lengths = [[], [], []];
    for (let i = 0; i < Game.X_DIMS;) {
      let chosenPojo = Math.round(Math.random() * 2)
      for (let j = 0; j < minLengthRequirement; j++) {
        switch (chosenPojo) {
          case 0:
            lengths[0][i] = true;
            lengths[1][i] = false;
            lengths[2][i] = false;
            break;
          case 1:
            lengths[0][i] = false;
            lengths[1][i] = true;
            lengths[2][i] = false;
            break;
          case 2:
            lengths[0][i] = false;
            lengths[1][i] = false;
            lengths[2][i] = true;
            break;
        }
        i++;
      }
    }
    return lengths;
  }
}

export default Game;