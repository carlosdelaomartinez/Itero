import Game from './game';
class Player {
  constructor() {
    this.height = 10;
    this.width = 10;
    this.xpos = Game.X_DIMS/2;
    this.ypos = Game.Y_DIMS - this.height;;
    this.velX = 0;
    this.velY = 10;
    this.handleKeys()
  }
  handleKeys(){
    document.addEventListener('keydown', (e) => {
      console.log(e.keyCode)
      switch(e.keyCode){
        case 65:
          this.xpos += -50
          break;
        case 68:
          this.xpos += 50
          break;
        case 87:
          this.ypos += -100
          break;
        case 83:
          this.ypos += 50
          break;

      }
    })
  }
  draw(ctx) {
    ctx.beginPath()
    ctx.fillStyle = 'red'
    ctx.fillRect(this.xpos , this.ypos, this.width, this.height)
    ctx.closePath()
    if(this.ypos + this.velY > Game.Y_DIMS - this.height){
      this.ypos = Game.Y_DIMS - this.height;
    } else {
      this.ypos += this.velY
    }
    this.xpos -= this.velX;
   


  }
}

export default Player;