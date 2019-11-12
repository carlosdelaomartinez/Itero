import Sunset from './Sunset.png'
import Level from './level'
import Player from './player';
import Menu from './menu';
import Grass from './grass.png'
class Game {
  static Y_DIMS = 700;
  static X_DIMS = 1000;
  constructor() {
    this.peicesToDraw = { paths: {}, player: '', background : [] };
    this.resumeGame = false;
    this.addPlayer();
    this.recipientSpeedMod = 1.5;
    this.colliderSpeedMod = 0.5;
    this.collisions = 0;
    this.music = true;
    this.gameStarted = false;
    // this.startGameMusic()
    this.forwardCars = 0;
    this.revCars = 0;
    this.level = new Level(this);
    this.level.pushStartRoads();
    this.menu = new Menu(this);
    this.gameOver = false;
    this.lost = false;
    this.progressLevel = 1;
  }
  clearLevel(){
    this.peicesToDraw.paths = {};
    this.forwardCars = 0;
    this.revCars = 0;
    this.peicesToDraw.player = '';
    this.peicesToDraw.background = [];
    this.addPlayer();
    // this.level = 
    this.level.pushStartRoads();
    // this.level.bgVel.x *= 2
  }
  restartGame(){
    this.clearLevel()
    this.progressLevel = 1;
    this.gameStarted = false;
    this.resumeGame = true;
    this.lost = false;
    this.level.bgVel.x = -3;
    this.level.fgVel.x = -3;
    this.level.mgVel.x = -3;
  }
  nextLevel(){

    // if(this.resumeGame === false){
      this.progressLevel += 1;
      if (this.progressLevel % 2 === 0) {
        this.level.bgVel.x *= 1.5;
        this.level.fgVel.x *= 1.5;
      } else {
        this.level.mgVel.x *= 1.5;
      }
      this.gameOver = false;
      this.resumeGame = true;
      this.clearLevel()
      
    // }
    
    
  }
  
  startGameMusic() {
    let gameMusic = new Audio('../src/GameMusic.ogg');
    gameMusic.addEventListener('ended', () => {
     gameMusic.currentTime = 0;
     gameMusic.play();
    })
    gameMusic.play()
  }
  addPlayer(){
    this.peicesToDraw.player = (new Player(this))
  }
  colorBackground(ctx) {
    let grassbg = new Image();
    grassbg.src = Grass;
    ctx.drawImage(grassbg, 0, 0, 600, 600, 0, 0 ,Game.X_DIMS * 0.5, Game.Y_DIMS);
    ctx.drawImage(grassbg, 0, 0, 600, 600, Game.X_DIMS * 0.5, 0, Game.X_DIMS * 0.5, Game.Y_DIMS);

    ctx.fillStyle = "#5C5E58";
    ctx.fillRect(0, Game.Y_DIMS * 0.28, Game.X_DIMS, Game.Y_DIMS * 0.15);
    ctx.fillRect(0, Game.Y_DIMS * 0.52, Game.X_DIMS, Game.Y_DIMS * 0.15);
    ctx.fillRect(0, Game.Y_DIMS * 0.77, Game.X_DIMS, Game.Y_DIMS * 0.15);
    ctx.fillRect(Game.X_DIMS/2, Game.Y_DIMS - Game.Y_DIMS * .055, Game.X_DIMS * .0325, Game.Y_DIMS * 0.055);


    let background = new Image();
    background.src = Sunset;
    ctx.drawImage(background, 0, 0, 480, 160, 0, 0, Game.X_DIMS, Game.Y_DIMS * 0.2)

   
    ctx.fillStyle = "#807E78"
    // ctx.fillRect(0, this.level.bgY - this.level.yOffset - 10, Game.X_DIMS, (this.level.height) * 4 )
    // ctx.fillStyle
  }

  step(timeShift){
    // debugger
    if ( this.resumeGame === false) {

    } else {
      this.level.handleMovingBackground()
      this.checkForPlatformCollisions()
      for (let pathKey in this.peicesToDraw.paths) {
        this.peicesToDraw.player.move(timeShift)
        let path = this.peicesToDraw.paths[pathKey];
        // if (
        //   ((path.xpos + path.width ) <= 0 && 
        //   path.direction === Level.FORWARD) ||
        //   ((path.xpos - path.width) >= Game.X_DIMS &&
        //     path.direction === Level.BACKWARDS)
        //   ) {
        //   path.first === true ? 
        //     path.direction === Level.FORWARD ? 
        //       this.level.pushMoreRoads(timeShift) :
        //       this.level.pushMoreRevRoads(timeShift):
        //       '';
        //   delete this.peicesToDraw.paths[pathKey];
        // } else {
        //   path.move(timeShift)
        // }
        if ((path.xpos + path.width) <= 0 ||
          (path.ypos + path.width) <= 0 ||
          path.xpos > Game.X_DIMS ||
          path.ypos > Game.Y_DIMS
        ) {

          if (this.forwardCars <= Game.X_DIMS / this.level.width) {
            // debugger
            this.level.pushMoreRoads(timeShift)
          } else if (this.revCars <= Game.X_DIMS / this.level.width) {
            this.level.pushMoreRevRoads(timeShift)
          }
          path.direction === Level.FORWARD ? this.forwardCars-- : this.revCars--;
          delete this.peicesToDraw.paths[pathKey];

        } else {
          path.move(timeShift)
        }
      }
      this.peicesToDraw.background.forEach(bg => bg.move(timeShift));
    }
    this.checkPlayerGameOver();
  }
  checkPlayerGameOver(){
    const { player } = this.peicesToDraw
    if (player.health <= 0){
      this.lost = true
      this.gameOver = true;
      this.resumeGame = false;
    }
    if(player.ypos <= Game.Y_DIMS * 0.25 + player.height * 0.01){
      this.gameOver = true;
      this.resumeGame = false;
    }
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
              
              recipient.velY = (recipient.velY + collider.velY ) * collisionModifier[1] * this.recipientSpeedMod;
              collider.velY = (collider.velY - recipient.velY) * this.colliderSpeedMod;
              recipient.velX = (recipient.velX + collider.velX) * collisionModifier[0] * this.recipientSpeedMod;
              collider.velX = (collider.velX - recipient.velX) * this.colliderSpeedMod;
              // recipient.color = 'green'
              // collider.color = 'blue'
              recipient.togglePlayerCollision();
              recipient.colllidedWithId = collider.id;
              collider.colllidedWithId = recipient.id;
              recipient.startRotateEvent(collisionModifier[3]);
              this.collisions += 1;
                      player.updateCollisionCount();
            } else if (recipient.playerCollision === true){

              recipient.velY = (recipient.velY + collider.velY) * collisionModifier[1] * this.recipientSpeedMod;
              collider.velY = (collider.velY - recipient.velY) * this.colliderSpeedMod;
              recipient.velX = (recipient.velX + collider.velX) * collisionModifier[0] * this.recipientSpeedMod;
              collider.velY = (collider.velY - recipient.velY) * this.colliderSpeedMod;
              recipient.color = 'green'
              collider.color = 'blue'
              collider.togglePlayerCollision();
              recipient.colllidedWithId = collider.id;
              collider.colllidedWithId = recipient.id;
              recipient.startRotateEvent(collisionModifier[3]);
              this.collisions += 1;
              player.updateCollisionCount();

            }     
        }
      }
  
      

      if (this.checkCollision(player, path1)) {
        let collisionModifier = this.getCollisionModifier(player, path1)

        // debugger
        // let carThud = new Audio('../src/collision.mp3');
        // carThud.play();
        path1.color = 'blue';
        player.color = 'blue'
        path1.velX = 0;
        path1.velY = 0;
        path1.velX += 3 * collisionModifier[0];
        path1.velY += 3 * collisionModifier[1];
        path1.togglePlayerCollision()
        // player.velX -= 1;
        path1.colllidedWithId = ''
        path1.startRotateEvent(collisionModifier[3]);
        this.collisions += 1;
        player.updateCollisionCount();
        player.health -= 10;

      } else {
        setTimeout(() => {
          player.color = 'red'
        }, 10000);
      }

      if (path1.rotating === true) {
        if (path1.xpos + path1.width > Game.X_DIMS){
          path1.xpos = Game.X_DIMS - path1.width
          path1.setCenter();
          path1.velX = path1.velX * -1;
          
        } else if (path1.xpos < 0){
          path1.xpos = 0;
          path1.setCenter();
          path1.velX = path1.velX * -1;

        } else if (path1.ypos + path1.height > Game.Y_DIMS) {
          path1.ypos = Game.Y_DIMS - path1.height
          path1.setCenter();
          path1.velY = path1.velY * -1;

          
        } else if (path1.ypos < Game.Y_DIMS * 0.2){
          path1.ypos = Game.Y_DIMS * 0.2;
          path1.setCenter()
          path1.velY = path1.velY * -1;

        }
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
        return [-1, -1, 0];
      case XtrueYfalse:
        return [-1, 1, 1];
      case XfalseYtrue:
        return [1, -1, 1];
      case XfalseYfalse:
        return [1, 1, 0];
    }
  }
}

export default Game;