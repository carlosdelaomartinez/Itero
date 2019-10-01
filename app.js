//need to be able to switch between foreground
// need to be able to switch between background
// need to be  abel to toggle which one is in view and is active
// when they are not toggled they need to be moved to their perspective view
  //on toggle change the backdropp to a sunset mood
  // move the level around the character
  // generate gaps the rule is that the screen must be filled but the gaps 
  // will be generated randomly with a set min width
document.addEventListener('DOMContentLoaded', () => {
  const gameCanvas = document.querySelector('canvas');
  gameCanvas.width = Game.X_DIMS;
  gameCanvas.height = Game.Y_DIMS;

  const context = gameCanvas.getContext('2d');
  const game = new Game();
  new GameView(game, context);
})

class GameView {
  constructor(game, ctx){
    this.game = game;
    this.ctx = ctx
    this.loadLevel(ctx)
  }

  loadLevel(ctx){
    console.log('loading level')
    this.game.colorBackground(ctx);
    this.game.loadPaths(ctx)
  }
}

class Game {
  static Y_DIMS = 600;
  static X_DIMS = 1000;
  constructor(){
    this.width = 40;
    this.gameLength = this.generateLengthPojos(10)
  }
  colorBackground(ctx){
    ctx.fillStyle = "#4CD8FA";
    ctx.fillRect(0, 0, Game.X_DIMS, Game.Y_DIMS);
  }
  loadPaths(ctx){
    this.paths = this.generateLengthPojos(300);
    this.level = new Level(this.paths[0], this.paths[1], this.paths[2],ctx)
    document.setInterval(() => {
      
    }, 5000);
  }
  // want to be able to make pojos of a given length 
  // can be used for difficulty
  generateLengthPojos(minLengthRequirement){
    const lengths = [{},{},{}]
    for(let i = 0; i < Game.X_DIMS; i++){
      let chosenPojo = Math.round(Math.random() * 2)
      for(let j = 0; j < minLengthRequirement && i < Game.X_DIMS; j++){
        switch(chosenPojo){
          case 0:
            lengths[0][i] = true;
            lengths[1][i] = false;
            lengths[2][i] = false; 
            break;
          case 1: 
            lengths[0][i] = false;
            lengths[1][i] = true;
            lengths[2][i] = false; 
            break;
          case 2:
            lengths[0][i] = false;
            lengths[1][i] = false;
            lengths[2][i] = true; 
            break;
        }
        i++
      }
      console.log(lengths);
    }
    return lengths;
  }
}
let game = new Game()
window.game = game;

class Player {
  constructor(){

  }

}



class PathTile {
  constructor(ctx){
    this.width = 10;
    this.height = 10;  
  }
  
}

//hand objects representing the lengths
class Level {
  constructor(fgToRender, mgToRender, bgToRender, ctx){
    this.foreground = new Foreground(fgToRender, false, ctx);
    this.middleground = new Middleground(mgToRender, true, ctx);
    this.background = new Background(bgToRender, false, ctx);
  }
}

class Ground {
  constructor(groundToRender, povToggled, ctx){
    this.groundArea = (groundToRender);
    this.povToggled = povToggled;
    this.ctx = ctx;
  }

  drawRoad(ctx, location, color, lengthsObj){
    
    console.log(lengthsObj)
    for (let x = 0; x < Game.X_DIMS; x ++){
      if(lengthsObj[x]) {
        ctx.fillStyle = color
        ctx.fillRect( x, location, 10, 20)
      }
    }
  }
}


class Background extends Ground {
  constructor(groundToRender, povToggled, ctx) {
    super(groundToRender, povToggled, ctx)
    this.color = '#EDC9AF'
    this.roadRow = 300;
    this.drawRoad(ctx, this.roadRow, this.color, groundToRender)
  }
}

class Middleground extends Ground {
  constructor(groundToRender, povToggled, ctx) {
    super(groundToRender, povToggled, ctx)
    this.color = '#565257';
    this.roadRow = 400;
    this.drawRoad(ctx, this.roadRow, this.color, groundToRender)

  }
}

class Foreground extends Ground {
  constructor(groundToRender, povToggled, ctx) {
    super(groundToRender, povToggled)
    this.color = '#7cfc00';
    this.roadRow = 500
    this.drawRoad(ctx, this.roadRow, this.color, groundToRender)

  }
}


class Grid {
  constructor(gridWidth, gridHeight){
    this.gridWidth = gridWidth;
    this.gridHeight = gridHeight;
    this.grid = this.generateGride(gridWidth, gridHeight)
  }
  
  generateGride(gridWidth, gridHeight){
    let root = document.querySelector('#root');
    for(let row = 0; row < gridHeight; row++ ){
      let rowDiv = document.createElement('div')
      rowDiv.classList.add(`row`)
      for(let col = 0; col < gridWidth; col++){
        let tile = document.createElement('div');
        tile.classList.add(`col-${col}`,`row-${row}`, `tile`);
        rowDiv.appendChild(tile);
      }
      root.appendChild(rowDiv);
    }
  }
  
}
// let grid = new Grid(70, 40)
// needs to handle the change between FG <-> MG <-> BG
// ** show an animation change when transitioning. 
class POVChange {

}

// 
// [].slice.call(document.querySelectorAll('.row-30')).forEach(el => el.classList.add('green'))
