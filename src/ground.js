import Game from './game';
import BaseObject from './baseObject'
class Ground extends BaseObject {
  constructor( xpos, velX, velY, minWidth, optLength, height, povToggled, offset = 0, ypos) {
    super()
    this.minWidth = minWidth;
    this.povToggled = povToggled;
    this.xpos = xpos + offset;
    this.ypos = ypos;
    this.velX = velX;
    this.velY = velY;
    this.optLength = optLength;
    this.height = height;
    this.centerX = this.xpos + (this.minWidth / 2);
    this.centerY = this.ypos + (this.height / 2);

    
  }

  move(timeChange){
    const velocityChange = timeChange / (1000 / 60)
    this.xpos += this.velX * velocityChange
    this.ypos += this.velY * velocityChange
  }
  draw(ctx){
    // debugger

    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.xpos , this.ypos, this.minWidth + this.optLength, this.height);
    ctx.closePath();
    // this.xpos += this.velX;
    // this.ypos += this.velY;

  }
}

export class Background extends Ground {
  constructor(xpos, velX, velY, minWidth, optLength, height, povToggled, offset, time = 0, first, ypos = 200 ) {
    super(xpos, velX, velY, minWidth, optLength, height, povToggled, offset, ypos)
    this.color = '#7cfc00';
    this.first = first;
    this.id = `${Math.round(Math.random() * this.xpos)}${Math.round(Math.random() * this.ypos)}${Math.round(time)}`
    // + Math.round(Math.random() * 100 + 50)
  }
 
}

export class Middleground extends Ground {
  constructor(xpos, velX, velY, minWidth, optLength, height, povToggled, offset, time = 0, first, ypos = 350 ) {
    super(xpos, velX, velY, minWidth, optLength, height, povToggled, offset, ypos)
    this.color = '#565257';
 
    this.first = first;
    this.id = `${Math.round(Math.random() * this.xpos)}${Math.round(Math.random() * this.ypos)}${Math.round(time)}`;
    // + Math.round(Math.random() * 100 + 50);

  }
}

export class Foreground extends Ground {
  constructor(xpos, velX, velY, minWidth, optLength, height, povToggled, offset, time = 0, first, ypos = 500) {
    super(xpos, velX, velY, minWidth, optLength, height, povToggled, offset, ypos)
    this.color = '#EDC9AF';
    this.first = first;
    this.id = `${Math.round(Math.random() * this.xpos)}${Math.round(Math.random() * this.ypos)}${Math.round(time)}`;
    // + (Math.round(Math.random() * 100 + 50));


  }
}