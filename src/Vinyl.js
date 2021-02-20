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

    // stroke(255);
    // strokeWeight(4);
    // fill(0);
    image(this.lp, this.x, this.y, this.width, this.height);
    if (this.x > WIDTH - 200 || this.y > HEIGHT - 200) {
    }
  }

  move() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }
}
