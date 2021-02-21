let timer = 30;

class Game {
  constructor() {
    this.player = new Player(250, 350);
    this.vinyls = [];
    this.background = new Background();
    this.vinylCounter = 0;
    this.timeRemaining = timer;
    this.isRunning = false;
    this.nextLevel = new NextLevel();
    this.gameOver = new GameOver();
    this.endGame = false;
  }

  setup() {}

  draw() {
    clear();
    background("red");

    for (let i = 0; i <= WIDTH; i += SQUARE_SIDE) {
      line(i, 0, i, HEIGHT);
    }
    for (let i = 0; i <= WIDTH; i += SQUARE_SIDE) {
      line(0, i, WIDTH, i);
    }

    this.player.draw();

    if (frameCount % 120 === 0) {
      this.vinyls.push(new Vinyl());
    }

    if (this.vinylCounter === 10) {
      this.endGame = "win";
    }
    if (this.timeRemaining === 0) {
      this.endGame = "out";
    }

    //array of obstacles
    this.vinyls.forEach((vinyl, index) => {
      vinyl.draw();
      vinyl.move();

      if (
        this.collisionCheck(this.player, vinyl) ||
        this.vinyls.length > 8 // ||
        // this.x > WIDTH - 200 ||
        // this.y > HEIGHT - 200
      ) {
        this.vinyls.splice(index, 1);
        if (this.collisionCheck(this.player, vinyl)) {
          console.log(this.vinylCounter);
          return (this.vinylCounter += 1);
        }
      }
    });

    if (this.endGame === "win") {
      return this.toTheNextLeve();
    }
    if (this.endGame === "out") {
      return this.goBackHome;
    }
  }

  keyPressed() {
    if (keyCode === 38) {
      this.player.moveUp();
    }
    if (keyCode === 37) {
      this.player.moveLeft();
    }
    if (keyCode === 40) {
      this.player.moveDown();
    }
    if (keyCode === 39) {
      this.player.moveRight();
    }
  }

  collisionCheck(player, vinyl) {
    const playerTopArea = player.y;
    const playerLeftArea = player.x;
    const playerRightArea = player.x + player.width;
    const playerBottomArea = player.y + player.height;

    const obsTopArea = vinyl.y;
    const obsLeftArea = vinyl.x;
    const obsRightArea = vinyl.x + vinyl.width;
    const obsBottomArea = vinyl.y + vinyl.height;
    const isTouchingOnLeft = obsRightArea > playerLeftArea;
    const isTouchingOnBottom = obsTopArea < playerBottomArea;
    const isTouchingOnRight = obsLeftArea < playerRightArea;
    const isTouchingOnTop = obsBottomArea > playerTopArea;

    return (
      isTouchingOnRight &&
      isTouchingOnTop &&
      isTouchingOnBottom &&
      isTouchingOnLeft
    );
  }

  timer = setInterval(function () {
    if (timer > 0) {
      console.log(timer);
    } else {
      noLoop();
    }

    timer--;
  }, 1000);

  toTheNextLeve() {
    this.nextLevel.draw();
    // if (frameCount % 240 === 0) {
    //   this.vinyls.push(new Vinyl());
    // }
    //game.music.top
  }
  goBackHome() {
    this.gameOver.draw();
  }
}
