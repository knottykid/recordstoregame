class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = w;
    this.position = "back";
    //   this.imgs = {};
    //   for (var position in imgDirection) {
    //     this.imgs[position] = new Image();
    //     this.imgs[position].src = imgDirection[position];
    //   }
    // }
  }
  moveUp() {
    this.y -= this.height;
    if (this.y < 0) {
      this.y = 0;
    }
    this.position = "up";
  }
  moveDown() {
    this.y += this.height;
    if (this.y + this.height > HEIGHT) {
      this.y = HEIGHT - this.height;
    }
    this.position = "down";
  }
  moveLeft() {
    this.x -= this.width;
    if (this.x < 0) {
      this.x = 0;
    }
    this.position = "left";
  }
  moveRight() {
    this.x += this.width;
    if (this.x + this.width > WIDTH) {
      this.x = WIDTH - this.width;
    }
    this.position = "Right";
  }

  draw() {
    image(collectorBack, this.x, this.y, this.width, this.height);
    //   image(collectorFront, this.x, this.y, this.width, this.height);
    //   image(collectorLeft, this.x, this.y, this.width, this.height);
    //   image(collectorRight, this.x, this.y, this.width, this.height);
    // }
  }
}
