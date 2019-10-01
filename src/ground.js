import Game from './game';

class Ground {
  constructor( xpos, velX, velY, minLengthRequirement, optLength, height, povToggled) {
    this.minLengthRequirement = minLengthRequirement
    this.povToggled = povToggled;
    
    this.velX = 10;
    this.xpos = xpos;
    this.velY = 0;
    this.velX = velX;
    this.velY = velY;
    this.optLength = optLength;
    this.height = height;
  }



  draw(ctx){
    let tempX = this.xpos
    let tempY = this.roadRow
    ctx.beginPath()
    ctx.fillStyle = this.color
    ctx.fillRect(tempX, tempY, this.minLengthRequirement + this.optLength, this.height)
    ctx.closePath()
    this.xpos -= this.velX
  }
}

export class Background extends Ground {
  constructor(ctx, xpos, velX, velY, minLengthRequirement, optLength, height, povToggled) {
    super(ctx, xpos, velX, velY, minLengthRequirement, optLength, height, povToggled)
    this.color = '#7cfc00';
    this.roadRow = 300;

  }
}

export class Middleground extends Ground {
  constructor(xpos, velX, velY, minLengthRequirement, optLength, height, povToggled) {
    super( xpos, velX, velY, minLengthRequirement, optLength, height, povToggled)
    this.color = '#565257';
    this.roadRow = 400;

  }
}

export class Foreground extends Ground {
  constructor( xpos, velX, velY, minLengthRequirement, optLength, height, povToggled) {
    super( xpos, velX, velY, minLengthRequirement, optLength, height, povToggled)
    this.color = '#EDC9AF';
    this.roadRow = 500


  }
}