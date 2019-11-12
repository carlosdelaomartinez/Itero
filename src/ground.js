import Game from './game';
import LightBlueCar from './carColors/light_blue.png';
import BlackCar from './carColors/black.png';
import GreenCar from './carColors/green.png';
import LightGrey from './carColors/light_grey.png';
import MidBlueCar from './carColors/mid_blue.png';
import MidGreyCar from './carColors/mid_grey.png';
import OrangeCar from './carColors/orange.png'
import PinkCar from './carColors/pink.png';
import PurpleCar from './carColors/purple.png'
import RedCar from './carColors/red.png';
import WhiteCar from './carColors/white.png';
import YellowCar from './carColors/yellow.png';
import BaseObject from './baseObject'
import Level from './level';
class Ground extends BaseObject {
  static CLOCKWISE = 'CLOCKWISE';
  static COUNTERCLOCKWISE = 'COUNTERCLOCKWISE';
  constructor(ops ) {
    super()
    this.carImage = ops.carImage;
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
    this.time = ops.time;
    this.first = ops.first;
    this.direction = ops.direction;
    this.carImageY = this.getRandomCarPosition()
    this.carDirection = this.direction === Level.FORWARD ? 128 : 640
    this.id = `${Math.round(Math.random() * this.xpos)}${Math.round(Math.random() * this.ypos)}${Math.round(this.time)}`
    this.rotationSpeed = 0;
    this.rotating = false;
    this.rotateDirection = false;
    this.setCenter();
    this.handleKeys();
    this.randomizeColor();
    this.orbiting = false;
  }
  getRandomCarPosition(){
    let num = Math.floor(Math.random() * 12)
    return 768 *  (num / 12);
  }
  handleKeys(){
    // document.addEventListener('keydown', (e) =>{
    //   e.preventDefault();
    //   this.ypos += 20;
    //   this.centerY += 20;
    // })
  
  }
  beginOrbit(obj){
    this.orbiting = true;
    this.centerOfOrbit = obj;
    // this.orbitRad = Math.abs(this.centerOfOrbit.xpos) - Math.abs(this.centerOfOrbit.xpos)
  }

  orbitDraw(ctx, carImg){
    ctx.save()
    ctx.translate(this.centerOfOrbit.xpos, this.centerOfOrbit.ypos)
    ctx.rotate(5 * Math.PI/180)
    // ctx.arc(this.centerOfOrbit.centerX, this.centerOfOrbit.centerY, 0, Math.PI * 2)
    ctx.drawImage(carImg, this.carDirection, this.carImageY + 13, 60, 35, 0, 0, this.width, this.height)
    ctx.restore()
  }
  orbitMove(obj, timeChange){
    
  }
  stopOrbit(){
    this.orbiting = false;
  }

  randomizeColor(){
    const colors =[
      BlackCar, 
      MidGreyCar, 
      LightBlueCar, 
      LightGrey,
      MidBlueCar,
      OrangeCar,
      PinkCar,
      PurpleCar,
      RedCar,
      WhiteCar,
      YellowCar, 
      GreenCar
    ]
    let randomNum = Math.floor(Math.random() * 12)
    this.carColor =  colors[randomNum]
  }
  setCenter(){
    this.centerX = this.xpos + (this.width / 2) ;
    this.centerY = this.ypos + (this.height / 2);
  } 

  move(timeChange){
    
    const velocityChange = timeChange / (1000 / 60)
    if(Math.abs(this.velX) > 3) this.velX = 5 * Math.sign(this.velX)
    if (Math.abs(this.velY) > 3) this.velY = 5 * Math.sign(this.velY)
    if(this.ypos < Game.Y_DIMS * 0.25) {
      this.ypos = Game.Y_DIMS * 0.25;
      this.velY = this.velY * -1;
    }
    this.xpos += this.velX * velocityChange
    this.ypos += this.velY * velocityChange
    this.setCenter();
    
  }
  draw(ctx){
    let carImage = new Image()
    carImage.src = this.carColor
    ctx.beginPath()
    // ctx.fillStyle = this.color;
  
    // ctx.fillRect(this.xpos , this.ypos, this.width, this.height);
    if (this.rotating === true){
      this.rotateCarImage(this.rotateDirection)
      ctx.save()
      ctx.translate(this.xpos , this.ypos)
      ctx.rotate( 20 * Math.PI/180)
      ctx.drawImage(carImage, this.carDirection, this.carImageY + 13, 60, 35, 0, 0, this.width, this.height)
      ctx.restore()
    } else {
      ctx.drawImage(carImage, this.carDirection, this.carImageY + 13, 60, 35, this.xpos, this.ypos, this.width, this.height)
    }
    // if (this.orbiting === true) {
    //   ctx.save()
    //   ctx.translate(this.centerOfOrbit.xpos, this.centerOfOrbit.ypos)
    //   ctx.rotate(5 * Math.PI / 180)
    //   // ctx.arc(this.centerOfOrbit.centerX, this.centerOfOrbit.centerY, 0, Math.PI * 2)
    //   ctx.drawImage(carImage, this.carDirection, this.carImageY + 13, 60, 35, 0, 0, this.width, this.height)
    //   ctx.restore()
    // }
    ctx.closePath()
  }
  rotateCarImage(dir){
    const clockwiseRotation = {
      0 : 64,
      64 : 128,
      128 : 192,
      192 : 256, 
      256 : 320,
      320 : 384,
      384 : 448, 
      448 : 512,
      512 : 576,
      576 : 640 , 
      640 : 704, 
      704 : 768,
      768 : 832,
      832 : 896,
      896 : 0
    }
    const counterClockWiseRotation = {
      0: 896,
      64: 0,
      128: 64,
      192: 128,
      256: 192,
      320: 256,
      384: 320,
      448: 384,
      512: 448,
      576: 512,
      640: 576,
      704: 640,
      768: 704,
      832: 768,
      896: 832
    }
    this.rotationSpeed += 1;
    if (dir ===  Ground.CLOCKWISE && this.rotationSpeed === 3){
      this.carDirection = clockwiseRotation[this.carDirection];
      this.rotationSpeed = 0;
    } else if ( dir == Ground.COUNTERCLOCKWISE && this.rotationSpeed === 3){
      this.carDirection = counterClockWiseRotation[this.carDirection];
      this.rotationSpeed = 0;
    }
  }
  startRotateEvent(dir){
   

    this.rotateDirection = dir === 1 ? Ground.CLOCKWISE : Ground.COUNTERCLOCKWISE;
    this.rotating = true
    setTimeout(() => {
      this.rotating = false;
    }, 200)
  }
  togglePlayerCollision(){
    this.playerCollision = true;
    setTimeout(() => {
      this.playerCollision = false;
    }, 200)
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