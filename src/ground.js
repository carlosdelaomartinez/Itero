import Game from './game';
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
    this.setCenter();
    this.handleKeys();
    // console.log(this.carImageY)
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
    let carImage = new Image()
    carImage.src = "../src/light_blue.png"
    ctx.beginPath()
    ctx.fillStyle = this.color;
  
    ctx.fillRect(this.xpos , this.ypos, this.width, this.height);
    if (this.rotating === true){
      this.rotateCarImage(Ground.CLOCKWISE)
      ctx.save()
      ctx.translate(this.xpos, this.ypos)
      ctx.rotate( 20 * Math.PI/180)
      ctx.drawImage(carImage, this.carDirection, this.carImageY + 13, 60, 34, 0, 0, this.width, this.height)
      ctx.restore()
    } else {
      ctx.drawImage(carImage, this.carDirection, this.carImageY + 13, 60, 34, this.xpos, this.ypos, this.width, this.height)

    }

    // ctx.arc(this.centerX, this.centerY, 3, 0, 2 * Math.PI, false )
    // ctx.fillStyle = 'white'
    // ctx.fill()
    // ctx.stroke()
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
  startRotateEvent(){
    this.rotating = true
    setTimeout(() => {
      this.rotating = false;
    }, 1500)
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