// player class with  moves and images
class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = w;
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
  }
}
