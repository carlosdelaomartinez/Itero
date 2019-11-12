
class MenuButton {
  constructor(ops, game){
    this.game = game;
    this.x = ops.x;
    this.y = ops.y;
    this.fxn = ops.fxn;
    this.width = ops.width;
    this.height = ops.height;
    this.text = ops.text;
    this.fontSize = ops.fontSize;
    this.color = 'black';
    this.optText = ops.optText;
    this.canvas = document.querySelector('canvas')
    this.handleClick = this.handleClick.bind(this);

    this.canvas.addEventListener('mouseup', this.handleClick );
  }
  
  handleClick(e){
    if(this.game.resumeGame === false){
      let bounds = this.canvas.getBoundingClientRect()
      let x = e.clientX - bounds.left;
      let y = e.clientY - bounds.top;
      if ((x > this.x && x < this.x + this.width) &&
        (y > this.y && y < this.y + this.height)) {

        this.fxn()
      }
    }
    this.canvas.removeEventListener('mouseup', this.handleClick);
    e.stopPropagation();


      
    
  }

  draw(ctx){
    // ctx.fillStyle = 'Orange'
    // ctx.fillRect(this.x, this.y, this.width * 1.5, this.height );
    ctx.font = `${this.fontSize}px Arial`;
    ctx.fillStyle = 'Teal';
    ctx.fillText(this.game.gameStarted === false ? this.text : this.optText, this.x, this.y+ this.fontSize);
  }
}

export default MenuButton;