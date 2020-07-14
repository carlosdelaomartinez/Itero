# Itero

* A Vanilla JavaScript game built using HTML5 Canvas
* Play as a racoon and try to cross the road, avoiding traffic along the way!

[LIVE DEMO](https://github.com/carlosdelaomartinez/Itero)

![intro page](images/gifs/2020-07-14%2011.09.22.gif)

## Players can navigate the streets as a Raccoon

![movement](images/gifs/2020-07-14%2011.12.28.gif)

```JS
move(timeChange){

    const velocityChange = timeChange / (1000 / 60)

    if (this.ypos + this.height > Game.Y_DIMS) {
      this.ypos = Game.Y_DIMS - this.height;
      this.setCenter()
      this.velY = 0;
    } else if (this.ypos  < Game.Y_DIMS * 0.25){
      this.ypos = Game.Y_DIMS * 0.25  ;
      this.setCenter();
    } else if (this.xpos + this.width  > Game.X_DIMS ){
      this.xpos = Game.X_DIMS - this.width;
      // this.velX = this.velX * -1;
      this.setCenter();
    } else if (this.xpos < 0){
      this.xpos = 0;
      // this.velX = this.velX * -1;
      this.setCenter();
    } else {
      this.ypos += this.velY * velocityChange
      this.xpos += this.velX * velocityChange
      this.setCenter();
    }
  }
```

## Car Object shape and color are randomly chosen on creation

```JS
  randomizeColor(){
    const colors =[
      BlackCar, 
      MidGreyCar, 
      LightBlueCar, 
      LightGrey,
      MidBlueCar,
      OrangeCar,
      PinkCar,
      PurpleCar,
      RedCar,
      WhiteCar,
      YellowCar, 
      GreenCar
    ]
    let randomNum = Math.floor(Math.random() * 12)
    this.carColor =  colors[randomNum]
  }

  draw(ctx){
    let carImage = new Image()
    carImage.src = this.carColor
    ctx.beginPath()
    if (this.rotating === true){
      this.rotateCarImage(this.rotateDirection)
      ctx.save()
      ctx.translate(this.xpos , this.ypos)
      ctx.rotate( 20 * Math.PI/180)
      ctx.drawImage(carImage, this.carDirection, this.carImageY + 13, 60, 35, 0, 0, this.width, this.height)
      ctx.restore()
    } else {
      ctx.drawImage(carImage, this.carDirection, this.carImageY + 13, 60, 35, this.xpos, this.ypos, this.width, this.height)
    }
       ctx.closePath()
  }
```

## Player can collide with cars and cars can continue colliding with other cars within a given timeframe

![collision](images/gifs/2020-07-14%2011.39.02.gif)

```JS
checkCollision(obj1, obj2){
    return (Math.abs(obj1.centerX - obj2.centerX) <  (obj2.width + obj1.width)/ 2 &&
      Math.abs(obj1.centerY - obj2.centerY) < (obj1.height+ obj2.height)/2 
      &&
      (obj1.playerCollision === true || obj2.playerCollision === true)
      )

  }

```

## Cars rotate depending on the point of impact

```JS
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
```

## Players progress to the next level upon reaching the city

![level progression](images/gifs/2020-07-14%2011.48.11.gif)

```JS
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
  }
```
