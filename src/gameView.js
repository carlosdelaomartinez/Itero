import Game from './game'
import Level from './level'
class GameView {
  constructor(game, ctx) {
    this.game = game
    this.ctx = ctx
    this.draw(this.ctx)
  }

  draw(ctx) {
    this.game.continueAddingRoads();
    setInterval(() => {
      this.game.continueAddingRoads();
    }, 2500);
    setInterval(() => {
      console.log(Game.PeicesToDraw.length)
      this.ctx.clearRect(0, 0, Game.X_DIMS, Game.Y_DIMS);
      this.game.colorBackground(ctx);

      Game.PeicesToDraw.forEach(obj => {
        obj.draw(ctx)
      });
      console.log('hi')
    }, 30);

  }
}

export default GameView;