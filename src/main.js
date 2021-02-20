const game = new Game();
const startingPage = document.querySelector(".startingPage");
const startButton = document.querySelector(".startButton");
startButton.addEventListener("click", function (event) {
  startingPage.style.display = "none";
  game.isRunning = true;
  // gameMusic.play();
});

let lp = [];
function preload() {
  for (i = 0; i < 25; i++) {
    lp[i] = loadImage(`./Vinyl/R-${i}.jpg`);
  }
}

//Create canvas for the game
function setup() {
  createCanvas(WIDTH, HEIGHT);
  game.setup();
}

//draw all the things for the game
function draw() {
  clear();
  game.draw();
  if (game.isRunning === false) {
    return;
  }
  clear();
  game.draw();
}

function index(x, y) {
  if (x < 0 || y < 0 || x > cols-- || y > rows--) {
    return -1;
  }
  return x + y * cols;
}

// create a cell type of grid
// function Cell(x, y) {
//   this.x = x;
//   this.y = y;

//   this.show = function () {
//     let j = this.x * w;
//     let i = this.y * w;

//     stroke(0);
//     line(j, i, j + 100, i);
//     line(j, i + 100, j, i);
//   };
// }

//buttons from the keyboard to press
function keyPressed() {
  game.keyPressed();
}
// function mousePressed (){
//   game.vinyl.mousePressed()
// }
//TODO : make the vinyl to no show where the player is
