import Level from './level'
import Player from './player';
class Game {
  static Y_DIMS = 600;
  static X_DIMS = 1400;
  constructor() {
    this.peicesToDraw = { paths: {}, player: '' };
    this.level = new Level(this);
    this.level.pushStartRoads()
    this.addPlayer();

  }
  addPlayer(){
    this.peicesToDraw.player = (new Player())
  }
  colorBackground(ctx) {
    ctx.fillStyle = "gray";
    ctx.fillRect(0, 0, Game.X_DIMS, Game.Y_DIMS);
  }

  step(timeShift){
    // debugger
    this.checkForPlatformCollisions()
    for (let pathKey in this.peicesToDraw.paths) {
      this.peicesToDraw.player.move(timeShift)
      let path = this.peicesToDraw.paths[pathKey];
      if (
        ((path.xpos + path.width ) <= 0 && 
        path.direction === Level.FORWARD) ||
        ((path.xpos - path.width) >= Game.X_DIMS &&
          path.direction === Level.BACKWARDS)
        ) {
        path.first === true ? 
          path.direction === Level.FORWARD ? 
            this.level.pushMoreRoads(timeShift) :
            this.level.pushMoreRevRoads(timeShift):
            '';
        delete this.peicesToDraw.paths[pathKey];
      } else {
        path.move(timeShift)
      }
    }
    // console.log(Object.keys(this.peicesToDraw.paths).length)
  }

  checkForPlatformCollisions() {
    const { player } = this.peicesToDraw
    for (let pathKey1 in this.peicesToDraw.paths) {
      const path1 = this.peicesToDraw.paths[pathKey1]
      for (let pathKey2 in this.peicesToDraw.paths){
        
        const path2 = this.peicesToDraw.paths[pathKey2]
        if (path1.id !== path2.id && 
          this.checkCollision(path1, path2) === true &&
          path1.colllidedWithId !== path2.id &&
          path2.colllidedWithId !== path1.id){
          console.log(path1.id !== path2.id)
            let collisionModifier = this.getCollisionModifier(path1, path2)
            let collider;
            let recipient;
            let path1SumV = Math.abs(path1.velX) + Math.abs(path1.velY);
            let path2SumV = Math.abs(path2.velX) + Math.abs(path2.velY);
            if( path1SumV > path2SumV){
              collider = path1;
              recipient = path2;
            } else {
              collider = path2;
              recipient = path1;
            }
            if(collider.playerCollision === true ){
              
              recipient.velY += collider.velY/2 * collisionModifier[1];
              collider.velY = (collider.velY - recipient.velY) * 0.9;
              recipient.velX += collider.velX/2 * collisionModifier[0];
              collider.velX = (collider.velX - recipient.velX) * 0.9;
              recipient.color = 'green'
              collider.color = 'blue'
              recipient.playerCollision = true;
              recipient.colllidedWithId = collider.id;
              collider.colllidedWithId = recipient.id;
              recipient.startRotateEvent();

            } else if (recipient.playerCollision === true){

              recipient.velY +=  collider.velY / 2 * collisionModifier[1];
              collider.velY = (collider.velY - recipient.velY) * 0.9;
              recipient.velX += collider.velX / 2 * collisionModifier[0];
              collider.velY = (collider.velY - recipient.velY) * 0.9;
              recipient.color = 'green'
              collider.color = 'blue'
              collider.playerCollision = true;
              recipient.colllidedWithId = collider.id;
              collider.colllidedWithId = recipient.id;
              recipient.startRotateEvent();
            }     
        }
      }
  
      

      if (this.checkCollision(player, path1)) {
        let collisionModifier = this.getCollisionModifier(player, path1)

        // debugger
        console.log('OVERLAP')
        path1.color = 'blue';
        player.color = 'blue'
        path1.velX = 0;
        path1.velY = 0;
        path1.velX += 3 * collisionModifier[0];
        path1.velY += 3 * collisionModifier[1];
        path1.playerCollision = true;
        player.velY = 1;
        path1.colllidedWithId = ''
        path1.startRotateEvent();
      } else {
        setTimeout(() => {
          player.color = 'red'
        }, 10000);
      }
    }
  }
  checkCollision(obj1, obj2){
    return (Math.abs(obj1.centerX - obj2.centerX) <  (obj2.width + obj1.width)/ 2 &&
      Math.abs(obj1.centerY - obj2.centerY) < (obj1.height+ obj2.height)/2 
      &&
      (obj1.playerCollision === true || obj2.playerCollision === true)
      )

  }
  getCollisionModifier(obj1, obj2){
    const Xtrue = 'Xtrue';
    const Xfalse = 'Xfalse';
    const Ytrue = 'true'
    const Yfalse = 'Yfalse';
    const XtrueYtrue = Xtrue + Ytrue;
    const XtrueYfalse = Xtrue + Yfalse;
    const XfalseYtrue = Xfalse + Ytrue;
    const XfalseYfalse = Xfalse + Yfalse;
    const playerFurtherOnX = obj1.centerX > obj2.centerX ? Xtrue : Xfalse;
    const playerFurtherOnY = obj1.centerY > obj2.centerY ? Ytrue : Yfalse;
    const positioncheck = playerFurtherOnX + playerFurtherOnY;
    switch (positioncheck) {
      case XtrueYtrue:
        return [-1, -1, ];
      case XtrueYfalse:
        return [-1, 1];
      case XfalseYtrue:
        return [1, -1];
      case XfalseYfalse:
        return [1, 1];
    }
  }
}

export default Game;