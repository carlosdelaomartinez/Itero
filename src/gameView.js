import Game from './game'
import Level from './level'
class GameView {
  constructor(game, ctx) {
    this.game = game
    this.ctx = ctx
    this.draw(this.ctx)
  }

  draw(ctx, time) {
      for(let path in Game.PeicesToDraw.paths){
        if ((Game.PeicesToDraw.paths.indexOf(path) % 10 === 0 || Game.PeicesToDraw.paths[0]) && path.xpos === 0){
          debugger
          this.game.continueAddingRoads()
        }
      }
      console.log(Game.PeicesToDraw.paths[1])
      // console.log(Game.PeicesToDraw.length)
      this.ctx.clearRect(0, 0, Game.X_DIMS, Game.Y_DIMS);
      this.game.colorBackground(ctx);
      Game.PeicesToDraw.player.draw(ctx);
      Game.PeicesToDraw.paths.forEach(obj => {
        obj.draw(ctx)
        obj.move.bind(this, time)
      
      });


  }
  begin (){
    this.previousTime = 0;
    requestAnimationFrame(this.animate.bind(this))
  }

  animate(time = 0){
    const timeShift = time - this.previousTime;

    this.draw(this.ctx, timeShift)
    this.previousTime = time;
    requestAnimationFrame(this.animate.bind(this))
  }
}

export default GameView;