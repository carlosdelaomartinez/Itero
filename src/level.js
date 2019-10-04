import Game from './game'
import { Background, Middleground, Foreground } from './ground'
class Level {
  constructor(game) {
    this.width = 100;
    this.height = 25;
    this.optLength = 0;
    this.bgVel = {x: -6, y: 0};
    this.mgVel = {x: -4, y: 0};
    this.fgVel = {x: -2, y: 0};
    this.bgY = 200;
    this.mgY = 350;
    this.fgY = 500;
    this.game = game;
  }
  pushMoreRoads( time){
    this.paths = this.generateLengthPojos(this.width);
    this.generateRoads(this.paths[0], this.paths[1], this.paths[2], time)
  }

  pushStartRoads(){
    this.paths = this.generateLengthPojos(this.width);
    this.generateRoads(this.paths[0], this.paths[1], this.paths[2])
    console.log(this.game.peicesToDraw)
  }

  generateRoads(fgToRender, mgToRender, bgToRender,  time = 0) {
    this.genRoad(Background, this.bgVel, bgToRender, false,  time,  this.bgY);
    this.genRoad(Middleground, this.mgVel, mgToRender, true, time,  this.mgY);
    this.genRoad(Foreground, this.fgVel, fgToRender,false,  time,  this.fgY);
  }
  
  genRoad(GroundClass, velOb ,lengthsObj, povToggled,  time,  ypos) {
    // debugger
    for (let xpos = 0; xpos < Game.X_DIMS; xpos += this.width) {
      if (lengthsObj[xpos]) {
        let first;
        if(xpos === 0) {

            first = true;
        } else {
          first = false;
        }
        const ops = {
          xpos,
          ypos,
          velX: velOb.x,
          velY: velOb.y,
          width: this.width,
          optLength: this.optLength,
          height: this.height,
          povToggled,
          offset: time === 0 ? 0 : Game.X_DIMS,
          time,
          first
        }
        
        let path = new GroundClass(ops)
        this.game.peicesToDraw.paths[path.id] = path
      }
    }
  }
  generateLengthPojos() {
    const lengths = [[], [], []];
    for (let i = 0; i < Game.X_DIMS;) {
      let chosenPojo = Math.round(Math.random() * 2)
      for (let j = 0; j < this.width; j+= this.width) {
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
  povChange(){
    
  }
}
export default Level;