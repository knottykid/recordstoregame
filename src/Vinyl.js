class Vinyl {
  constructor() {
    this.x = this.setRandomPosition();
    this.y = this.setRandomPosition();
    this.width = w;
    this.height = w;
    this.lp = random(lp);
  }

  setRandomPosition() {
    return Math.floor(Math.random() * 10) * w;
  }

  draw() {
    // this.x -= 3;

    // fill(0);
    if (this.x >= w && this.y >= w)
      image(this.lp, this.x, this.y, this.width, this.height);
  }

  move() {
    this.x = this.x + random(-1, 1);
    //this.y = this.y + random(-3, 3);
  }
}
