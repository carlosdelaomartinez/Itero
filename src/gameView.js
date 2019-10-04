import Game from './game'
import Level from './level'
import { pathToFileURL } from 'url'
class GameView {
  constructor(game, ctx) {
    this.game = game
    this.ctx = ctx
    // this.draw(this.ctx)
  }

  draw(ctx) {//WORK ON THIS
      this.ctx.clearRect(0, 0, Game.X_DIMS, Game.Y_DIMS);
      this.game.colorBackground(ctx);
      
      for (let pathKey in this.game.peicesToDraw.paths){

        
        let path = this.game.peicesToDraw.paths[pathKey]
        path.draw(ctx)
      }
    this.game.peicesToDraw.player.draw(ctx);



  }
  begin (){
    this.previousTime = 0;
    requestAnimationFrame(this.animate.bind(this))
  }

  animate(time = 0){
 
    const timeShift = time - this.previousTime;
    // debugger
    this.game.step(timeShift)
    this.draw(this.ctx)
    this.previousTime = time;
    requestAnimationFrame(this.animate.bind(this))
  }
}

export default GameView;