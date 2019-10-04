import Game from './game';
import BaseObject from './baseObject'
class Player extends BaseObject {
  constructor() {
    super()
    this.height = 10;
    this.width = 10;
    this.xpos = Game.X_DIMS/2;
    this.ypos = Game.Y_DIMS - this.height;;
    this.velX = 0;
    this.velY = 0;
    this.color = 'red'
    this.centerX = this.xpos + (this.width / 2);
    this.centerY = this.ypos + (this.height / 2);
    this.handleKeys.bind(this)()
  }
  
  handleKeys(){
    document.addEventListener('keydown', (e) => {
      switch(e.keyCode){
        case 65:
          this.xpos += -50
          break;
        case 68:
          this.xpos += 50
          break;
        case 87:
          for(let i = 0; i < 10; i++){
            this.ypos -= 1
          }
        
          break;
        case 83:
          this.ypos += 50
          break;

      }
    })
  }
  move(timeChange){
    const velocityChange = timeChange / (1000 / 60)

    if (this.ypos + this.velY > Game.Y_DIMS - this.height) {
      this.ypos = Game.Y_DIMS - this.height;
    } else {
      this.ypos += this.velY * velocityChange
    }
    this.xpos -= this.velX * velocityChange
  }
  draw(ctx) {
    

    ctx.beginPath()
    ctx.fillStyle = this.color
    ctx.fillRect(this.xpos , this.ypos, this.width, this.height)
    ctx.closePath()

    
   
  }
}

export default Player;