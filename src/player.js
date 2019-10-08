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
   
    this.handleKeys.bind(this)()
    this.animationX= 0;
    this.animationY= 210;
    this.animationCounter = 0;
    this.animationDirection  = 'down';
    this.setCenter();
  }
  setCenter() {
    this.centerX = this.xpos + (this.width / 2);
    this.centerY = this.ypos + (this.height / 2);
  }
  handleKeys(){
    document.addEventListener('keydown', (e) => {
       
      switch(e.keyCode){
        case 65:
          this.animationY = 255;
          if (this.velX < 2) {
            this.velX = -.09;
            // this.centerX += -Game.X_DIMS * 0.02; 
          }   
          break;
        case 68:
          this.animationY = 305;
          if (this.velX > -2){
            this.velX = .09;
            // this.centerX += Game.X_DIMS * 0.02;
          }
          break;
        case 87:
          this.animationY = 355;
           if (this.velY > -2){
             this.velY = -.09;
            //  this.centerY += -Game.Y_DIMS * .042;
           } 
          break;
        case 83:
          this.animationY = 210;
          if (this.velY < 2) {
            this.velY = .09;
            // this.centerY += Game.Y_DIMS * .042;
          }
        
          break;

      }
    })
  }
  move(timeChange){
    const velocityChange = timeChange / (1000 / 60)

    if (this.ypos + this.height > Game.Y_DIMS) {
      this.ypos = Game.Y_DIMS - this.height;
      this.setCenter()
      this.velY = 0;
    } else if (this.ypos  < Game.Y_DIMS * 0.25){
      this.ypos = Game.Y_DIMS * 0.25  ;
      this.setCenter();
    } else if (this.xpos + this.width  > Game.X_DIMS ){
      this.xpos = Game.X_DIMS - this.width;
      // this.velX = this.velX * -1;
      this.setCenter();
    } else if (this.xpos < 0){
      this.xpos = 0;
      // this.velX = this.velX * -1;
      this.setCenter();
    } else {
      this.ypos += this.velY * velocityChange
      this.xpos += this.velX * velocityChange
      this.setCenter();
    }

    
  }
  draw(ctx) {
    this.idle()

    let frog = new Image()
    frog.src = Racoon
    // ctx.fillStyle = 'red'
    // ctx.fillRect(this.xpos, this.ypos, this.width, this.height)

    ctx.drawImage(frog, this.animationX, this.animationY , 35, 35, this.xpos, this.ypos, this.width, this.height)
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