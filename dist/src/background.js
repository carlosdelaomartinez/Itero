// import _ from 'lodash';
import City from './city.png'
import Game from './game';
class MovingBackground  {
  constructor(ops) {
    this.xpos = ops.xpos;
    this.velX = -0.15;
    this.width = Game.X_DIMS * 0.6
    
  }


  move(timeChange) {
    const velocityChange = timeChange / (1000 / 60)

    this.xpos += this.velX * velocityChange
   }

  draw(ctx) {
    let bgimage = new Image();
    bgimage.src = City
    ctx.beginPath()
      ctx.drawImage(bgimage, 0, 0, this.width, 139, this.xpos, 0, this.width , Game.Y_DIMS * 0.25)
    ctx.closePath()
  }
}

export default MovingBackground;