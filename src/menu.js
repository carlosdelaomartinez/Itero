import Game from './game';
import MenuButton from './menuButton';
class Menu {
  constructor(game){
    this.game = game;
    this.top = Game.Y_DIMS * 0.2;
    this.left = Game.X_DIMS * 0.2;
    this.textX = Game.X_DIMS * 0.3;
    this.fontSize = Game.Y_DIMS * 0.1;
    this.listenForMenu();

  }

  listenForMenu(){
    let canvas = document.querySelector('canvas');
    document.addEventListener('keydown', (e) => {
      if(e.keyCode === 13) {
        this.resumeGame()
        this.makeButtons();
      }
    })
  }
  
  makeButtons(){
    this.start = new MenuButton({
      x: this.textX, 
      y: Game.Y_DIMS * 0.5, 
      fxn: this.resumeGame.bind(this),
      width: 150,
      height: 50, 
      text: 'Start',
      fontSize: Game.Y_DIMS* 0.05,
      optText: 'Resume'
    }, 
    this.game);  
  }
  makeNextLevButton(){
    this.nextLevel = new MenuButton({
      x: this.textX,
      y: Game.Y_DIMS * 0.7,
      fxn: this.resetGame.bind(this),
      width: 150,
      height: 50,
      text: 'Next Level',
      fontSize: Game.Y_DIMS * 0.05,
      optText: 'Next Level'
    }, this.game);
  }
  resetGame(){
    
    this.game.nextLevel();
    
  }
  restart(){
    this.game.restartGame()
  }
  makeRestartButton(){
    this.restartGame = new MenuButton({
      x: this.textX,
      y: Game.Y_DIMS * 0.6,
      fxn: this.restart.bind(this),
      width: 150,
      height: 70,
      text: 'Restart',
      fontSize: Game.Y_DIMS * 0.05,
      optText: 'Restart'
    }, this.game);
  }
  //Menu
  // Start 
    // Should have the abilityt to begin the gsme
    // should be able to choose if audio is on or off
  //Pause Menu
  resumeGame(){

    if(this.game.gameStarted === false){
      this.game.gameStarted = true;
    }
    this.game.resumeGame === false ? (this.game.resumeGame = true) : (this.game.resumeGame = false);

  }
  pauseGame(){
    this.game.resumeGame = false;
  }

  

  //Win menu with links
  // styling the site around. 

  //Add instructions
  


  draw(ctx){
    if(this.game.lost === true && this.game.gameOver === true){
      
      ctx.save();
      ctx.fillStyle = 'rgba(173, 216, 230, 0.95)';
      ctx.fillRect(this.left, this.top, Game.X_DIMS * 0.6, Game.Y_DIMS * 0.6);
      ctx.font = `${this.fontSize}px Arial`;
      ctx.fillStyle = 'black'
      ctx.fillText(`GAME OVER`, this.left + (Game.X_DIMS * 0.1), this.top + this.fontSize)
      ctx.fillText(`Level ${this.game.progressLevel}`, this.left + (Game.X_DIMS * 0.1), this.top + this.fontSize * 2.5)
      ctx.restore();
      this.makeRestartButton();
      this.restartGame.draw(ctx)
    } else if (this.game.lost === false && this.game.gameOver === true){
      this.makeNextLevButton()
      ctx.save();
      ctx.fillStyle = 'rgba(173, 216, 230, 0.95)';
      ctx.fillRect(this.left, this.top, Game.X_DIMS * 0.6, Game.Y_DIMS * 0.6);
      ctx.font = `${this.fontSize * 0.8}px Arial`;
      ctx.fillStyle = 'black'
      ctx.fillText(`Congrats`, this.left + (Game.X_DIMS * 0.1), this.top + this.fontSize)
      ctx.fillText(`Level ${this.game.progressLevel} Complete!`, this.left + (Game.X_DIMS * 0.1), this.top + this.fontSize * 2)
      ctx.restore()
      this.nextLevel.draw(ctx);
    } else {
      ctx.save();
      ctx.fillStyle = 'rgba(173, 216, 230, 0.95)';
      ctx.fillRect(this.left, this.top, Game.X_DIMS * 0.6, Game.Y_DIMS * 0.6);
      ctx.font = `${this.fontSize}px Arial`;
      ctx.fillStyle = 'black'
      ctx.fillText(`ITERO`, this.left + (Game.X_DIMS * 0.2), this.top + this.fontSize)
      ctx.restore()
      ctx.save()
      ctx.font = `${20}px Arial`;
      ctx.fillText('Make your way across the road',
        this.left + (Game.X_DIMS * 0.25),
        this.top + this.fontSize * 2
      )
      ctx.fillText('Try and avoid traffic',
        this.left + (Game.X_DIMS * 0.25),
        this.top + this.fontSize * 2 + Game.Y_DIMS * 0.05
      )
      ctx.fillText("Touching cars causes loss in health",
        this.left + (Game.X_DIMS * 0.25),
        this.top + this.fontSize * 2 + Game.Y_DIMS * 0.05 * 2
      )
      ctx.fillText("Higher levels increase difficulty",
        this.left + (Game.X_DIMS * 0.25),
        this.top + this.fontSize * 2 + Game.Y_DIMS * 0.05 * 3
      )
      ctx.fillText("Navigate using 'w', 'a', 's', 'd'",
        this.left + (Game.X_DIMS * 0.25),
        this.top + this.fontSize * 2 + Game.Y_DIMS * 0.05 * 4
      )
      ctx.fillText("Press Enter To Begin, or Pause",
        this.left + (Game.X_DIMS * 0.25),
        this.top + this.fontSize * 2 + Game.Y_DIMS * 0.05 * 5
      )
      this.makeButtons();

      ctx.restore();
      this.start.draw(ctx);

    }
    }
    
}

export default Menu;