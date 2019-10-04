import Game from './game';
class BaseObject {
  static FRAME_RATE_TIME_CHANGE = 1000 / 60
  constructor(xpos, ypos, velX, velY){
    this.xpos = xpos;
    this.ypos = ypos;
    this.velX = velX;
    this.velY = velY;
  }
  move(timeChange){
    
    const velocityChange = timeChange / Object.FRAME_RATE_TIME_CHANGE
    this.xpos = this.xpos + this.velX * velocityChange
    this.ypos = this.ypos + this.velY * velocityChange
  }

  
  

}

export default BaseObject;