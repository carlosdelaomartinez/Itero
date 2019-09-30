//need to be able to switch between foreground
// need to be able to switch between background
// need to be  abel to toggle which one is in view and is active
// when they are not toggled they need to be moved to their perspective view
  //on toggle change the backdropp to a sunset mood
  // move the level around the character
  // generate gaps the rule is that the screen must be filled but the gaps 
  // will be generated randomly with a set min width

class Game {

}

class Player {
  constructor(){

  }

}

class object {

}

class Level {
  constructor(fgToRender, mgToRender, bgToRender){
    this.foreground = new Foreground(fgToRender, false);
    this.middleground = new Middleground(mgToRender, true);
    this.background = new Background(bgToRender, false);
  }
}

class Ground {
  constructor(groundToRender, povToggled){
    this.groundArea = (groundToRender);
    this.povToggled = povToggled;
  }
}

class Foreground extends Ground {
  constructor(groundToRender, povToggled){
    super(groundToRender, povToggled)
  }
}

class Middleground extends Ground {
  constructor(groundToRender, povToggled) {
    super(groundToRender, povToggled)
  }
}

class Background extends Ground {
  constructor(groundToRender, povToggled) {
    super(groundToRender, povToggled)
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
let grid = new Grid(145, 82)
// needs to handle the change between FG <-> MG <-> BG
// ** show an animation change when transitioning. 
class POVChange {

}