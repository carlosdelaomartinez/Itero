import Game from './game'
import { Background, Middleground, Foreground } from './ground'
class Level {
  constructor(game) {
    this.minWidth = 25;
    this.height = 25;
    this.optLength = 25;
    this.bgVel = {x: -8, y: 0};
    this.mgVel = {x: -6, y: 0};
    this.fgVel = {x: -4, y: 0};
    this.game = game;
  }
  pushMoreRoads( offset, time){
    this.paths = this.generateLengthPojos(this.minWidth);
    this.generateRoads(this.paths[0], this.paths[1], this.paths[2], offset, time)
  }

  pushStartRoads(){
    this.paths = this.generateLengthPojos(this.minWidth);
    this.generateRoads(this.paths[0], this.paths[1], this.paths[2])
  }

  generateRoads(fgToRender, mgToRender, bgToRender, offset, time, first) {
    this.genRoad(Background, this.bgVel, bgToRender, false, offset, time, first);
    this.genRoad(Middleground, this.mgVel, mgToRender, true,offset, time, first);
    this.genRoad(Foreground, this.fgVel, fgToRender,false, offset, time, first);
  }
  
  genRoad(GroundClass, velOb ,lengthsObj, povToggle, offset, time) {

    for (let x = 0; x < Game.X_DIMS; x += this.minWidth) {
      if (lengthsObj[x]) {
        let first;
        if(x === 0) {

            first = true;
        } else {
          first = false;
        }
        let path = new GroundClass(x, velOb.x, velOb.y, this.minWidth, this.optLength, this.height, povToggle, offset, time, first)
        this.game.peicesToDraw.paths[path.id] = path
      }
    }
  }
  generateLengthPojos() {
    const lengths = [[], [], []];
    for (let i = 0; i < Game.X_DIMS;) {
      let chosenPojo = Math.round(Math.random() * 2)
      for (let j = 0; j < this.minWidth; j+= this.minWidth) {
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