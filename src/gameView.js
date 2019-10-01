import Game from './game'
class GameView {
  constructor(game, ctx) {
    this.game = game;
    this.ctx = ctx
    this.draw(ctx)
  }

  draw(ctx) {
    setInterval(() => {
      this.ctx.clearRect(0, 0, Game.X_DIMS, Game.Y_DIMS);
      this.game.colorBackground(ctx);
      this.game.loadPaths(ctx)

    }, 500);

  }
}

export default GameView;