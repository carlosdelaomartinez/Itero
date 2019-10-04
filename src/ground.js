import Game from './game';
import BaseObject from './baseObject'
class Ground extends BaseObject {
  constructor(ops ) {
    super()
    this.width = ops.width + ops.optLength;
    this.povToggled = ops.povToggled;
    this.xpos = ops.xpos + ops.offset;
    this.ypos = ops.ypos;
    this.velX = ops.velX;
    this.velY = ops.velY;
    this.optLength = ops.optLength;
    this.height = ops.height;
    this.playerCollision = false;
    this.collidedWidthId = '';
    this.time = ops.time 
    this.first = ops.first
    this.id = `${Math.round(Math.random() * this.xpos)}${Math.round(Math.random() * this.ypos)}${Math.round(this.time)}`
    this.setCenter();
    
  }
  setCenter(){
    this.centerX = this.xpos + (this.width / 2) ;
    this.centerY = this.ypos + (this.height / 2);
  } 

  move(timeChange){
    const velocityChange = timeChange / (1000 / 60)
    this.xpos += this.velX * velocityChange
    this.ypos += this.velY * velocityChange
    this.centerX += this.velX * velocityChange;
    this.centerY += this.velY * velocityChange;
  }
  draw(ctx){
    ctx.beginPath()
    ctx.fillStyle = this.color;
    ctx.fillRect(this.xpos , this.ypos, this.width, this.height);
    ctx.arc(this.centerX, this.centerY, 3, 0, 2 * Math.PI, false )
    ctx.fillStyle = 'white'
    ctx.fill()
    ctx.stroke()
    ctx.closePath()
  }
}

export class Background extends Ground {
  constructor(ops) {
    super(ops)
    this.color = '#7cfc00';
    this.weight = 500;
    // + Math.round(Math.random() * 100 + 50)
  }
 
}

export class Middleground extends Ground {
  constructor(ops) {
    super(ops)
    this.color = '#565257';
    this.weight = 300;
    // + Math.round(Math.random() * 100 + 50);

  }
}

export class Foreground extends Ground {
  constructor(ops) {
    super(ops)
    this.color = '#EDC9AF';
    this.weight = 100;
    // + (Math.round(Math.random() * 100 + 50));


  }
}