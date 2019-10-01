import { Background, Middleground, Foreground } from './ground'
class Level {
  constructor(ctx) {
    this.foreground = new Foreground(false, ctx);
    this.middleground = new Middleground(true, ctx);
    this.background = new Background(false, ctx);
  }

  renderRoads(fgToRender, mgToRender, bgToRender, minLengthRequirement, height, optLength) {
    this.foreground.drawRoad(fgToRender, minLengthRequirement, height, optLength);
    this.middleground.drawRoad(mgToRender, minLengthRequirement, height, optLength);
    this.background.drawRoad(bgToRender, minLengthRequirement, height, optLength);
  }

  povChange(){
    
  }
}
export default Level;