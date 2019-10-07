import Game from './game'
import { Background, Middleground, Foreground } from './ground'
import MovingBackground from './background'

class Level {
  static FORWARD = 'FORWARD';
  static BACKWARDS = 'BACKWARDS';
  constructor(game) {
    this.width = Game.X_DIMS * 0.06;
    this.height = Game.Y_DIMS * 0.066;
    this.optLength = 0;
    this.bgVel = {x: -20, y: 0};
    this.mgVel = {x: -4, y: 0};
    this.fgVel = {x: -4, y: 0};
    this.bgY = Game.Y_DIMS * 0.35;
    this.mgY = Game.Y_DIMS * 0.6;
    this.fgY = Game.Y_DIMS * 0.85;
    this.yOffset = Game.Y_DIMS * 0.1;
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
  handleMovingBackground(){
    let firstBgPanel = this.game.peicesToDraw.background[0]
    let lastPanel = this.game.peicesToDraw.background[this.game.peicesToDraw.background.length - 1]
    if(firstBgPanel.xpos + firstBgPanel.width < 0 ){
      this.game.peicesToDraw.background.push(new MovingBackground({ xpos: lastPanel.xpos + lastPanel.width }))
      this.game.peicesToDraw.background.shift()
    }
  }
  pushStartRoads(){
    this.paths = this.generateLengthPojos();
    this.revPaths = this.generateLengthPojos();
    this.generateRoads(this.revPaths[0], this.revPaths[1], this.revPaths[2], Level.BACKWARDS)
    this.generateRoads(this.paths[0], this.paths[1], this.paths[2], Level.FORWARD )
    this.pushCityBackgrounds()
    // debugger
  }

  pushCityBackgrounds(){
    for(let i = 0; i < (Game.X_DIMS * 1.8); i+= (Game.X_DIMS *0.6)){
      this.game.peicesToDraw.background.push(new MovingBackground({ xpos: i}))

    }

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
        dir === Level.FORWARD ? (this.game.forwardCars += 1) : (this.game.revCars += 1)
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