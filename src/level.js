import Game from './game'
import { Background, Middleground, Foreground } from './ground'
class Level {
  constructor() {
    this.minLengthRequirement = 300;
    this.height = 25;
    this.optLength = -150;
    this.bgVel = {x: 5, y: 0};
    this.mgVel = {x: 10, y: 0};
    this.fgVel = {x: 5, y: 0};
    
  }
  pushMoreRoads( offset){
    this.paths = this.generateLengthPojos(this.minLengthRequirement);
    this.generateRoads(this.paths[0], this.paths[1], this.paths[2], offset)
  }

  pushStartRoads(){
    this.paths = this.generateLengthPojos(this.minLengthRequirement);
    this.generateRoads(this.paths[0], this.paths[1], this.paths[2])
  }

  generateRoads(fgToRender, mgToRender, bgToRender, offset) {
    this.genRoad(Background, this.bgVel, bgToRender, false, offset);
    this.genRoad(Middleground, this.mgVel, mgToRender, true,offset);
    this.genRoad(Foreground, this.fgVel, fgToRender,false, offset);
  }
  
  genRoad(GroundClass, velOb ,lengthsObj, povToggle, offset) {

    for (let x = 0; x < Game.X_DIMS; x += this.minLengthRequirement) {
      if (lengthsObj[x]) {

        Game.PeicesToDraw.push(new GroundClass(x, velOb.x, velOb.y,  this.minLengthRequirement, this.optLength, this.height, povToggle, offset))
      }
    }
  }
  generateLengthPojos() {
    const lengths = [[], [], []];
    for (let i = 0; i < Game.X_DIMS;) {
      let chosenPojo = Math.round(Math.random() * 2)
      for (let j = 0; j < this.minLengthRequirement; j+= this.minLengthRequirement) {
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