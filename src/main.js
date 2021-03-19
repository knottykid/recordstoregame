//here we start everything
const game = new Game();
const startingPage = document.querySelector(".startingPage");
const startButton = document.querySelector(".startButton");

// getting the images and the music ready for the game.
function preload() {
  //array of random covers
  for (i = 0; i < 25; i++) {
    lp[i] = loadImage(`./Vinyl/R-${i}.jpg`);
  }
  collector = loadImage("./assest/back.png");
  collectorBack = loadImage("./assest/back.png");
  collectorFront = loadImage("./assest/front.png");
  collectorLeft = loadImage("./assest/left.png");
  collectorRight = loadImage("./assest/right.png");
  background1 = loadImage("./assest/bg-game_1.jpeg");
  background2 = loadImage("./assest/bg-game_2.jpeg");
  background3 = loadImage("./assest/bg-game_3.jpeg");
  goodEnd = loadImage("./assest/imageedit_5_3450569759.jpg");
  badEnd = loadImage("./assest/imageedit_8_8594792081.jpg");
  gameMusic = loadSound("./music/PrettyLights-PinkFloyd-TimeRemix.mp3");
  goodEndMusic = loadSound("./music/LofiLove.wav");
  badEndMusic = loadSound("./music/SonicBeatMaster.wav");
}

startButton.addEventListener("click", function (event) {
  startingPage.style.display = "none";
  game.isRunning = true;
  game.startGame();

  let musicInterval = setInterval(() => {
    try {
      gameMusic.play();
      Slider(0, 1, 0.1, 0.1)
      gameMusic.setVolume(slider.value());
      clearInterval(musicInterval);
    } catch (error) {
      console.log("ERROR");
      return;
    }
  }, 500);
});

let lp = [];

//Create canvas for the game
function setup() {
  createCanvas(WIDTH, HEIGHT);
}

//draw all the things for the game
function draw() {

  if (game.isRunning === false) {
    return;
  }

  clear();
  game.draw();
 
}

//buttons from the keyboard to press
function keyPressed() {
  game.keyPressed();
}
