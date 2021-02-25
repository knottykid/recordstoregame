class NextLevel {
  constructor() {}
  draw() {
    clear();

    //background(0, 100);
    if (this.level > 1 && time === 0) textSize(50);
    fill(255, 20, 158);
    text(`King of Discogs ${game.vinylCounter}`);
    background(goodEnd, WIDTH, HEIGHT);
  }
}

class GameOver {
  constructor() {}
  draw() {
    clear();
    background(0);
    textSize(30);
    fill(220, 100, 55);
    text("Go Home, We're closed!", 120, 80);

    textSize(20);
    fill(155, 22, 60);
    text(
      `You call yourself a collector with only ${game.vinylCounter} vinyl ?`,
      105,
      45
    );
    image(badEnd, 75, 100, 500, 500);
  }
}
