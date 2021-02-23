class NextLevel {
  constructor() {}
  draw() {
    //background(0, 100);

    text("King of Discogs");
  }
}

class GameOver {
  constructor() {}
  draw() {
    background(0);
    text("Go Home, We're closed!");
    color("yellow");
    noLoop();
  }
}
