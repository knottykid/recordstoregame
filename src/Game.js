class Game {
  constructor() {
    this.player = new Player(250, 350);
    this.vinyls = [];
    this.background = new Background();
  }

  setup() {
    //this.vinyl.setup();

    cols = floor(WIDTH);
    rows = floor(HEIGHT);

    for (let x = 0; x < rows; x++) {
      for (let y = 0; y < cols; y++) {
        let cell = new Cell(x, y);
        grid.push(cell);
      }
    }
    current = grid[(250, 350)];
  }

  draw() {
    clear();
    background("red");
    for (let i = 0; i < grid.length; i++) {
      grid[i].show();
    }
    this.player.draw();

    if (frameCount % 10 === 0) {
      this.vinyls.push(new Vinyl());
    }

    //array of obstacles
    this.vinyls.forEach((vinyl, index) => {
      vinyl.draw();

      if (this.collisionCheck(this.player, vinyl) || frameCount <= 5) {
        this.vinyls.splice(index, 1);
      }

      // remove the obstacle if its out of canvas
      // if (vinyl.x <= -vinyl.width) {

      // }
    });
    //this.vinyls.draw();
  }

  // for (let i = 0; i <= 1; i++) {
  //   //for (let j = 0; j <= 0; j++) {
  //   let x = 0 + 100 * i;
  //   let y = 0 + 100 * i;
  //   let v = new Vinyl(x, y);
  //   vinyl.push(v);
  //   // }
  // }
  // for (let lp of vinyl) {
  //   // lp.move();
  //   lp.show();
  // }

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
}

// this.vinyl.forEach((activeVinyl, index) => {
//   if (this.grab(this.player, activeVinyl)) {
//     this.vinyl.splice(index, 1);
//   }
// });

/*
TODO!

1) Replace circles for squares! (make sure to test just for 1 vinyl)
2) At game start, push a new vinyl into the game.vinyls array
3) Check the collision detection

*/
