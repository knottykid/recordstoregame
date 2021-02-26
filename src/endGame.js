//good and bad end, deping on the level and the collection

class GoodEnd {
  constructor() {
    this.goodEndMusic = goodEndMusic;
  }
  draw() {
    clear();
    background(0);
    textSize(30);
    fill(220, 100, 55);
    text("King of Discogs!!!", 120, 80);
    textSize(20);
    fill(155, 22, 60);
    text(
      `You got ${game.score} Vinyl and made it to the Level ${game.level}`,
      105,
      45
    );
    image(goodEnd, 75, 100, 500, 500);
    goodEndMusic.play();
    goodEndMusic.setVolume(0.2);
  }
}

class GameOver {
  constructor() {
    this.badEndMusic = badEndMusic;
  }
  draw() {
    clear();
    background(0);
    textSize(30);
    fill(220, 100, 55);
    text("Go Home, We're closed!", 120, 80);

    textSize(20);
    fill(155, 22, 60);
    text(
      `You call yourself a collector with only ${game.score} vinyl ?`,
      105,
      45
    );
    image(badEnd, 75, 100, 500, 500);
    badEndMusic.play();
    badEndMusic.setVolume(0.2);
  }
}
