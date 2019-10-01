import Game from './game';

class Ground {
  constructor(povToggled, ctx) {
    this.povToggled = povToggled;
    this.ctx = ctx;
    this.velX = 10;
    this.velY = 0;
  }

  drawRoad(lengthsObj, minLengthRequirement, height, optLength = 0) {

    console.log(lengthsObj)
    for (let x = 0; x < Game.X_DIMS; x += minLengthRequirement) {
      if (lengthsObj[x]) {
        let tempX = x
        let tempY = this.roadRow

          this.ctx.beginPath()
          this.ctx.fillStyle = this.color
          this.ctx.fillRect(tempX, this.roadRow, minLengthRequirement + optLength, height)
          this.ctx.closePath()
          tempX += this.velX

        

      }
    }
  }
}

export class Background extends Ground {
  constructor(povToggled, ctx) {
    super(povToggled, ctx)
    this.color = '#7cfc00';
    this.roadRow = 300;

  }
}

export class Middleground extends Ground {
  constructor(povToggled, ctx) {
    super(povToggled, ctx)
    this.color = '#565257';
    this.roadRow = 400;

  }
}

export class Foreground extends Ground {
  constructor(povToggled, ctx) {
    super(povToggled, ctx)
    this.color = '#EDC9AF';
    this.roadRow = 500


  }
}