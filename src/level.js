import Game from './game'
import { Background, Middleground, Foreground } from './ground'
class Level {
  constructor() {
    
  }

  pushRoads(minLengthRequirement, height, optLength){
    this.paths = this.generateLengthPojos(minLengthRequirement);
    this.generateRoads(this.paths[0], this.paths[1], this.paths[2], minLengthRequirement, height, optLength)
  }

  generateRoads(fgToRender, mgToRender, bgToRender, minLengthRequirement, height, optLength) {
    this.genRoad(Background, bgToRender, minLengthRequirement, height, optLength, false);
    this.genRoad(Middleground, mgToRender, minLengthRequirement, height, optLength, true);
    this.genRoad(Foreground, fgToRender, minLengthRequirement, height, optLength,false);
  }
  
  genRoad(GroundClass, lengthsObj, minLengthRequirement, height, optLength = 0, povToggle) {

    for (let x = 0; x < Game.X_DIMS; x += minLengthRequirement) {
      if (lengthsObj[x]) {

        Game.PeicesToDraw.push(new GroundClass(x, 10, 0, minLengthRequirement, optLength, height, povToggle))
      }
    }
  }
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
  povChange(){
    
  }
}
export default Level;