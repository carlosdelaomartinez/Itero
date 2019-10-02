import Game from './game';
import BaseObject from './baseObject'
class Ground extends BaseObject {
  constructor( xpos, velX, velY, minWidth, optLength, height, povToggled, offset = 0, ypos) {
    super()
    this.minWidth = minWidth
    this.povToggled = povToggled;
    this.offset = offset;
    this.xpos = xpos;
    this.ypos = ypos;
    this.velX = velX;
    this.velY = velY;
    this.optLength = optLength;
    this.height = height;
  }



  draw(ctx){
    
    ctx.beginPath()
    ctx.fillStyle = this.color
    ctx.fillRect(this.xpos + this.offset, this.ypos, this.minWidth + this.optLength, this.height)
    ctx.closePath()
    this.xpos -= this.velX
    this.ypos -= this.velY;
    
    
  }
}

export class Background extends Ground {
  constructor(ctx, xpos, velX, velY, minWidth, optLength, height, povToggled, offset) {
    super(ctx, xpos, velX, velY, minWidth, optLength, height, povToggled, offset)
    this.color = '#7cfc00';
    this.ypos = 200 
    // + Math.round(Math.random() * 100 + 50)
  }
}

export class Middleground extends Ground {
  constructor(xpos, velX, velY, minWidth, optLength, height, povToggled, offset) {
    super(xpos, velX, velY, minWidth, optLength, height, povToggled, offset)
    this.color = '#565257';
    this.ypos = 300 
    // + Math.round(Math.random() * 100 + 50);

  }
}

export class Foreground extends Ground {
  constructor(xpos, velX, velY, minWidth, optLength, height, povToggled, offset) {
    super(xpos, velX, velY, minWidth, optLength, height, povToggled, offset)
    this.color = '#EDC9AF';
    this.ypos = 400 
    // + (Math.round(Math.random() * 100 + 50));


  }
}