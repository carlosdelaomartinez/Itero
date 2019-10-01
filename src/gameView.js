
class GameView {
  constructor(game, ctx) {
    this.game = game;
    this.ctx = ctx
    this.loadLevel(ctx)
  }

  loadLevel(ctx) {
    console.log('loading level')
    this.game.colorBackground(ctx);
    this.game.loadPaths(ctx)
  }
}

export default GameView;