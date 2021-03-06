import Game from './game'
import Level from './level'
import { pathToFileURL } from 'url'

class GameView {
  constructor(game, ctx) {
    this.game = game
    this.ctx = ctx
    this.fontSize = Math.round(18 * Game.X_DIMS / 800);
    // this.draw(this.ctx)
  }

  draw(ctx) {

      
      this.ctx.clearRect(0, 0, Game.X_DIMS, Game.Y_DIMS);
      this.game.colorBackground(ctx);
      this.game.peicesToDraw.background.forEach(bg => bg.draw(ctx));


      for (let pathKey in this.game.peicesToDraw.paths) {
        let path = this.game.peicesToDraw.paths[pathKey]
        path.draw(ctx)
      }
      this.game.peicesToDraw.player.draw(ctx);
      // ctx.save()
      // ctx.font = `${25}px Arial`;
      // ctx.fillStyle = 'orange'
      // ctx.fillText(`Collision Counter: ${this.game.collisions}`, Game.X_DIMS * 0.4, Game.Y_DIMS * 0.05)
      // ctx.restore()
      ctx.fillStyle = 'black'
    if (this.game.resumeGame === false) {
      this.game.menu.draw(ctx);
    } 


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