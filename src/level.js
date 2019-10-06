import Game from './game'
import { Background, Middleground, Foreground } from './ground'

class Level {
  static FORWARD = 'FORWARD';
  static BACKWARDS = 'BACKWARDS';
  constructor(game) {
    this.width = 100;
    this.height = 50;
    this.optLength = 0;
    this.bgVel = {x: -5, y: 0};
    this.mgVel = {x: -4, y: 0};
    this.fgVel = {x: -3, y: 0};
    this.bgY = 150;
    this.mgY = 325;
    this.fgY = 500;
    this.yOffset = 75;
    this.game = game;
  }
  pushMoreRoads( time){
    this.paths = this.generateLengthPojos();
    this.generateRoads(this.paths[0], this.paths[1], this.paths[2],  Level.FORWARD, time)
  }
  pushMoreRevRoads(time){
    this.revPaths = this.generateLengthPojos();
    this.generateRoads(this.revPaths[0], this.revPaths[1], this.revPaths[2],  Level.BACKWARDS, time)

  }

  pushStartRoads(){
    this.paths = this.generateLengthPojos();
    this.revPaths = this.generateLengthPojos();
    this.generateRoads(this.revPaths[0], this.revPaths[1], this.revPaths[2], Level.BACKWARDS)
    this.generateRoads(this.paths[0], this.paths[1], this.paths[2], Level.FORWARD )
    console.log(this.game.peicesToDraw)
  }

  generateRoads(fgToRender, mgToRender, bgToRender,dir,  time = 0) {
    this.genRoad(Background, this.bgVel, bgToRender, false,  time,  this.bgY, dir);
    this.genRoad(Middleground, this.mgVel, mgToRender, true, time,  this.mgY, dir);
    this.genRoad(Foreground, this.fgVel, fgToRender,false,  time,  this.fgY, dir);
  }
  
  genRoad(GroundClass, velOb ,lengthsObj, povToggled,  time,  ypos, dir) {

    const conditionalBegining = (dir === Level.FORWARD ? 0 :  (lengthsObj.length  - this.width));
    if (dir === Level.BACKWARDS){
    }
    for (let xpos = 0; xpos < Game.X_DIMS; xpos += this.width) {
      if (lengthsObj[xpos]) {
        let first;
        
        if(xpos === conditionalBegining) {

            first = true;
        } else {
          first = false;
        }
    
        const ops = {
          xpos,
          ypos: dir === Level.FORWARD ? ypos: (ypos - this.yOffset),
          velX: dir === Level.FORWARD ? velOb.x: -velOb.x,
          velY: dir === Level.FORWARD ? velOb.y: -velOb.y,
          width: this.width,
          optLength: this.optLength,
          height: this.height,
          povToggled,
          offset: time === 0 ? 0 : 
            dir === Level.FORWARD ? Game.X_DIMS:  -Game.X_DIMS,
          time,
          first,
          direction: dir === Level.FORWARD ? Level.FORWARD : Level.BACKWARDS
  
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