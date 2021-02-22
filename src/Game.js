let timer = 30;
// const myCollection = document.querySelector(".counter")
// myCollection.addEventListener(collisionCheck)
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

    if (frameCount % 180 === 0) {
      this.vinyls.push(new Vinyl());
    }

    if (this.vinylCounter === 10) {
      this.endGame = "win";
    }
    if (timer === 0) {
      this.endGame = "out";
    }

    //array of obstacles
    this.vinyls.forEach((vinyl, index) => {
      vinyl.draw();
      vinyl.move();

      if (this.collisionCheck(this.player, vinyl) || this.vinyls.length > 6) {
        this.vinyls.splice(index, 1);
        if (this.collisionCheck(this.player, vinyl)) {
          document.getElementById("collect").innerHTML = this.vinylCounter;
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
    // let now = new Date().getTime();
    // let distance = timer - now;
    // let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // document.getElementById("time").innerHTML = seconds + "s ";
    // if (distance < 0) {
    //   clearInterval(timer);
    //   document.getElementById("time").innerHTML =
    //     "the Time is gone, the Song is over";
    // }

    if (timer > 0) {
      document.getElementById("time").innerHTML = timer;

      console.log(timer);
    } else if (timer < 0) {
      clearInterval(timer);
      document.getElementById("time").innerHTML =
        "the Time is gone, the Song is over";
      noLoop();
    }

    timer--;
  }, 1000);

  toTheNextLeve() {
    this.nextLevel.draw();
  }
  goBackHome() {
    console.log(this.goBackHome);
    noLoop();
    this.GameOver.draw();
  }
}
