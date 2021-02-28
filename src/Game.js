//this is where the magic happens

class Game {
  constructor() {
    this.player = new Player(300, 400);
    this.vinyls = [];
    this.vinylCounter = 0;
    this.level = 1;
    this.isRunning = false;
    this.goodEnd = new GoodEnd();
    this.gameOver = new GameOver();
    this.endGame = false;
    this.gameMusic = gameMusic;
    this.time = time;
    this.score = 0;
  }
  //draw the back ground on every level
  draw() {
    clear();
    if (this.level === 2) {
      background(background2);
    } else if (this.level > 3) {
      background(background3);
    } else {
      background(background1);
    }
    //draw the player
    this.player.draw();

    // push new collectible every 1.5 seconds
    if (frameCount % 90 === 0) {
      this.vinyls.push(new Vinyl());
    }

    //array of obstacles
    this.vinyls.forEach((vinyl, index) => {
      vinyl.draw();
      vinyl.move();
      // collectibles and splice
      if (this.collisionCheck(this.player, vinyl) || this.vinyls.length > 10) {
        this.vinyls.splice(index, 1);
        if (this.collisionCheck(this.player, vinyl)) {
          document.getElementById("collect").innerHTML = this.vinylCounter;
          console.log(this.vinylCounter);
          this.score += 1;
          return (this.vinylCounter += 1);
        }
      }
    });
    //conditions to change levels
    if (this.level === 1 && this.vinylCounter === 8) {
      this.endGame = "win";
    } else if (this.level === 2 && this.vinylCounter === 12) {
      this.endGame = "win";
    } else if (this.level === 3 && this.vinylCounter === 16) {
      this.endGame = "win";
    } else if (this.time === 0 && this.level > 1) {
      this.endGame = "pro";
    } else if (this.time === 0 && this.level === 1) {
      this.endGame = "out";
    }
    // calling methods for levels, good and bad ending
    if (this.endGame === "win") {
      return this.toTheNextLevel();
    }
    if (this.endGame === "pro") {
      return this.discogsKing();
    }
    if (this.endGame === "out") {
      return this.goBackHome();
    }
  }
  // movements of the player
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
  //collision check
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

    this.time = 30;
  }
  //timer interval
  startGame() {
    this.timer = setInterval(() => {
      if (this.time > 0) {
        document.getElementById("time").innerHTML = this.time;

        console.log(this.time);
      } else if (this.time < 0) {
        clearInterval(this.timer);
        document.getElementById("time").innerHTML =
          "the Time is gone, the Song is over";
      }

      this.time--;
    }, 1000);
  }
  // chaging level method
  toTheNextLevel() {
    this.level++;
    document.getElementById("level").innerHTML = this.level;
    this.resetVariables();
    this.endGame = "";
  }
  // good end method
  discogsKing() {
    this.goodEnd.draw();
    noLoop();
    gameMusic.stop();
    const button = document.createElement("button");
    button.innerText = "RESTART!";
    button.style.background = "black";
    button.style.color = "red";
    button.classList.add("restart");
    document.body.appendChild(button);
    button.onclick = () => {
      location.reload();
      button.parentNode.removeChild(button);
    };
  }

  //bad end method
  goBackHome() {
    this.gameOver.draw();
    noLoop();
    gameMusic.stop();
    const button = document.createElement("button");
    button.innerText = "RESTART!";
    button.style.background = "black";
    button.style.color = "red";
    button.classList.add("restart");
    document.body.appendChild(button);
    button.onclick = () => {
      location.reload();
      button.parentNode.removeChild(button);
    };
  }
}
