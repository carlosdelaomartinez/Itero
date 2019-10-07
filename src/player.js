import Racoon from "./racoons.png"
import Game from './game';
import BaseObject from './baseObject'
class Player extends BaseObject {
  constructor() {
    super()
    this.height = Game.Y_DIMS * 0.05;
    this.width = Game.X_DIMS * .025;
    this.xpos = Game.X_DIMS / 2;
    this.ypos = Game.Y_DIMS - this.height;
    this.velX = 0;
    this.velY = 0;
    this.color = 'red'
    this.playerCollision = true;
    this.centerX = this.xpos + (this.width / 2);
    this.centerY = this.ypos + (this.height / 2);
    this.handleKeys.bind(this)()
    this.animationX= 0;
    this.animationY= 210;
    this.animationCounter = 0;
    this.animationDirection  = 'down';
  }
  
  handleKeys(){
    document.addEventListener('keydown', (e) => {
       
      switch(e.keyCode){
        case 65:
          this.animationY = 250;
          if (this.velX < 2) {
            this.velX = -.05;
            this.centerX += -Game.X_DIMS * 0.02; 
          }   
          break;
        case 68:
          this.animationY = 300;
          if (this.velX > -2){
            this.velX = .05;
            this.centerX += Game.X_DIMS * 0.02;
          }
          break;
        case 87:
          this.animationY = 350;
           if (this.velY > -2){
             this.velY = -.05;
             this.centerY += -Game.Y_DIMS * .042;
           } 
          break;
        case 83:
          this.animationY = 200;
          if (this.velY < 2) {
            this.velY = .05;
            this.centerY += Game.Y_DIMS * .042;
          }
        
          break;

      }
    })
  }
  move(timeChange){
    const velocityChange = timeChange / (1000 / 60)

    if (this.centerY + this.velY > Game.Y_DIMS - this.height) {
      this.centerY = Game.Y_DIMS - this.height;
      this.velY = 0;
    } else if (this.ypos <= 0){
      this.centerY = 1 ;
      this.velY = -0.05;
    } else{
      this.centerY += this.velY * velocityChange
    }
    this.centerX += this.velX * velocityChange
  }
  draw(ctx) {
    this.idle()

    let frog = new Image()
    frog.src = Racoon
    // ctx.fillRect(this.centerX, this.centerY, this.width, this.height)
        // ctx.fillStyle = this.color

    // ctx.fillRect(this.centerX, this.centerY, this.width, this.height)

    ctx.drawImage(frog, this.animationX, this.animationY , 35, 40, this.centerX, this.centerY, this.width, this.height)
  }
  idle(){
    
    const animationPojo = {
      0: 50,
      50: 100,
      100: 0
    }
    if (this.animationCounter === 10){
      this.animationX = animationPojo[this.animationX];
      this.animationCounter = 0;
    }
    this.animationCounter += 1;
  }
}

export default Player;