class NextLevel {
  constructor() {}
  draw() {
    background(0, 100);

    text("King of Discogs");
  }
}

class GameOver {
  draw() {
    if (timer === 0) {
      noLoop();
    }
    background(0);

    text("Go back home");
  }
}
