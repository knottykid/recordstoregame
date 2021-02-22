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
  collector = loadImage("./assest/Featured-Image20.png");
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
  // clear();
  // game.draw();
}

function index(x, y) {
  if (x < 0 || y < 0 || x > cols-- || y > rows--) {
    return -1;
  }
  return x + y * cols;
}

//buttons from the keyboard to press
function keyPressed() {
  game.keyPressed();
}

//TODO : make the vinyl to no show where the player is
