class Game {
  constructor() {
    this.player = new Player(300, 400);
    this.vinyls = [];
    this.background = new Background();
    this.vinylCounter = 0;
    this.level = 1;
    this.isRunning = false;
    this.nextLevel = new NextLevel();
    this.gameOver = new GameOver();
    this.endGame = false;
    this.gameMusic = gameMusic;
    this.time = time;
  }

  setup() {}

  draw() {
    clear();
    if (this.level > 1) {
      background("rgba(0,255,0, 0.25)");
    } else {
      background("red");
    }
    textSize(25);
    textStyle(BOLD);
    fill(70, 3, 117);
    text(`Level: ${this.level}`, 1200, 100);

    for (let i = 0; i <= WIDTH; i += SQUARE_SIDE) {
      line(i, 0, i, HEIGHT);
    }
    for (let i = 0; i <= WIDTH; i += SQUARE_SIDE) {
      line(0, i, WIDTH, i);
    }

    this.player.draw();

    if (frameCount % 90 === 0) {
      this.vinyls.push(new Vinyl());
    }

    //array of obstacles
    this.vinyls.forEach((vinyl, index) => {
      vinyl.draw();
      vinyl.move();

      if (this.collisionCheck(this.player, vinyl) || this.vinyls.length > 10) {
        this.vinyls.splice(index, 1);
        if (this.collisionCheck(this.player, vinyl)) {
          document.getElementById("collect").innerHTML = this.vinylCounter;
          console.log(this.vinylCounter);
          // localStorage.setItem("collection", 0);
          // document.getElementById("collect").innerHTML = localStorage.getItem(
          //   "collection"
          // );
          return (this.vinylCounter += 1);
        }
      }
    });

    if (this.level === 1 && this.vinylCounter === 8) {
      this.endGame = "win";
    } else if (this.level === 2 && this.vinylCounter === 12) {
      this.endGame = "win";
    } else if (this.level === 3 && this.vinylCounter === 16) {
      this.endGame = "win";
    } else if (this.time === 0) {
      this.endGame = "out";
    }

    if (this.endGame === "win") {
      return this.toTheNextLevel();
    }
    if (this.endGame === "out") {
      return this.goBackHome();
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
  resetVariables() {
    this.vinylCounter = 0;

    this.time = 40;
  }

  startGame() {
    this.timer = setInterval(() => {
      if (this.time > 0) {
        document.getElementById("time").innerHTML = this.time;

        console.log(this.time);
      } else if (this.time < 0) {
        clearInterval(this.timer);
        document.getElementById("time").innerHTML =
          "the Time is gone, the Song is over";
        // noLoop();
        gameMusic.stop();
      }

      this.time--;
    }, 1000);
  }

  toTheNextLevel() {
    this.nextLevel.draw();
    this.level++;
    document.getElementById("level").innerHTML = this.level;
    this.resetVariables();
    this.endGame = "";
  }
  goBackHome() {
    console.log("helloooo");
    noLoop();
    this.gameOver.draw();
  }
}
