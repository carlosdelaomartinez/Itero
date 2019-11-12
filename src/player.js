import Racoon from "./racoons.png"
import Game from './game';
import BaseObject from './baseObject'
class Player extends BaseObject {
  constructor(game) {
    super()
    this.game = game;
    this.height = Game.Y_DIMS * 0.045;
    this.width = Game.X_DIMS * .0225;
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
    this.collisionCount = 0;
    this.collisionReductionModifier = 10;
    this.health = 200;
    this.collisionMeterFull = false;
  }
  pushAllCarsBack(){
    // if (this.collisionMeterFull === true) {

    for (let key in this.game.peicesToDraw.paths){
        let car = this.game.peicesToDraw.paths[key]

        let collisionMod = this.game.getCollisionModifier(this, car)
        car.velX += 100 * collisionMod[0];
        car.velY += 100 * collisionMod[1];
       
      }
      this.collisionCount = 0;
      this.collisionMeterFull = false;
      
    // }
  }
  startOrbitingCars(){
    for (let key in this.game.peicesToDraw.paths){
      let car = this.game.peicesToDraw.paths[key]

      car.beginOrbit(this);
    }
  }

  updateCollisionCount(){
    if(this.collisionCount/this.collisionReductionModifier <= Game.X_DIMS * 0.2){
      this.collisionCount += 1;
    } else {
      this.collisionMeterFull = true;
    }
  }
  drawCollisionMeter(ctx){
    ctx.fillStyle = 'orange'
    ctx.fillRect(Game.X_DIMS * 0.75, Game.Y_DIMS * 0.95, this.collisionCount / this.collisionReductionModifier, Game.Y_DIMS * 0.024)
    ctx.strokeRect(Game.X_DIMS * 0.75, Game.Y_DIMS * 0.95, Game.X_DIMS * 0.2, Game.Y_DIMS * 0.025)
  }
  drawHealthMeter(ctx){
    ctx.fillStyle='green'
    ctx.fillRect(Game.X_DIMS * 0.75, Game.Y_DIMS * 0.015, this.health, Game.Y_DIMS * 0.024)

    ctx.strokeRect(Game.X_DIMS * 0.75, Game.Y_DIMS * 0.015, Game.X_DIMS * 0.2, Game.Y_DIMS * 0.025)
    ctx.font = `${30}px Arial`;
    ctx.fillStyle = 'Orange';
    ctx.fillText(`Level ${this.game.progressLevel}`, Game.X_DIMS * 0.05, Game.Y_DIMS * 0.05);
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
          if (this.velX < 3) {
            this.velX = -.15;
            this.velY = 0;
            // this.centerX += -Game.X_DIMS * 0.02; 
          }   
          break;
        case 68:
          this.animationY = 305;
          if (this.velX > -2){
            this.velX = .15;
            this.velY = 0;
            // this.centerX += Game.X_DIMS * 0.02;
          }
          break;
        case 87:
          this.animationY = 355;
           if (this.velY > -2){
             this.velY = -.15;
             this.velX = 0
            //  this.centerY += -Game.Y_DIMS * .042;
           } 
          break;
        case 83:
          this.animationY = 210;
          if (this.velY < 2) {
            this.velY = 0.15;
            this.velX = 0;
            // this.centerY += Game.Y_DIMS * .042;
          }
        
          break;
          // case 82: 
          // this.startOrbitingCars()
          // break;
          // case 32:
          //   this.pushAllCarsBack()
          //   break;
      }
    });
    document.addEventListener('keyup', (e) => {
      if(e.keyCode === 87 || e.keyCode === 83){
        this.velY = 0;

      } else if (e.keyCode === 65 || e.keyCode === 68){
        this.velX = 0;

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
  orbit(){
    
  }
  draw(ctx) {
    this.idle()

    let frog = new Image()
    frog.src = Racoon
    // ctx.fillStyle = 'red'
    // ctx.fillRect(this.xpos, this.ypos, this.width, this.height)

    ctx.drawImage(frog, this.animationX, this.animationY , 35, 35, this.xpos, this.ypos, this.width, this.height)
    // this.drawCollisionMeter(ctx);
    this.drawHealthMeter(ctx)
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