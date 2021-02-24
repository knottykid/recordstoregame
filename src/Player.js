class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = SQUARE_SIDE;
    this.height = SQUARE_SIDE;
  }
  moveUp() {
    this.y -= this.height;
    if (this.y < 0) {
      this.y = 0;
    }
    collector = collectorBack;
  }
  moveDown() {
    this.y += this.height;
    if (this.y + this.height > HEIGHT) {
      this.y = HEIGHT - this.height;
    }
    collector = collectorFront;
  }
  moveLeft() {
    this.x -= this.width;
    if (this.x < 0) {
      this.x = 0;
    }
    collector = collectorLeft;
  }
  moveRight() {
    this.x += this.width;
    if (this.x + this.width > WIDTH) {
      this.x = WIDTH - this.width;
    }
    collector = collectorRight;
  }

  draw() {
    image(collector, this.x, this.y, this.width, this.height);
    //   image(collectorFront, this.x, this.y, this.width, this.height);
    //   image(collectorLeft, this.x, this.y, this.width, this.height);
    //   image(collectorRight, this.x, this.y, this.width, this.height);
    // }
  }
}
/* function preload() {
  treasurePicture = loadImage("/assets/treasure.png");
  pictureVariable = loadImage("../assets/character-down.png");
  pictureVariableUp = loadImage("../assets/character-up.png");
  pictureVariableRight = loadImage("../assets/character-right.png");
  pictureVariableLeft = loadImage("../assets/character-left.png");
  pictureVariableDown = loadImage("../assets/character-down.png");
  
  
   draw() {
        image(pictureVariable, this.x, this.y, this.width, this.height)
    }
  
  moveUp(){
        this.y -= SQUARE_SIDE;
        pictureVariable = pictureVariableUp
        if(this.y < 0){
            this.y = 0;
        }
    }

    moveLeft(){
        this.x -= SQUARE_SIDE;
        pictureVariable = pictureVariableLeft
        if(this.x < 0){
            this.x = 0;
        }
    }

    moveRight(){
        this.x += SQUARE_SIDE;
        pictureVariable = pictureVariableRight
        if(this.x + this.width > WIDTH){
            this.x = WIDTH - this.width;
        }
    }

    moveDown(){
        this.y += SQUARE_SIDE;
        pictureVariable = pictureVariableDown
        if(this.y + this.height > HEIGHT){
            this.y = HEIGHT - this.height;
        }
    }
*/
