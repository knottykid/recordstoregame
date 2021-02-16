const game = new Game()

function preload(){}


//Create canvas for the game
function setup() {
  createCanvas(WIDTH, HEIGHT);
  game.setup()
  
}

//draw all the things for the game
function draw() {
  game.draw()
}

// create a cell type of grid
function Cell (x, y) {
  this.x = x;
  this.y = y;
  this.show = function() {
    let j = this.x * 50;
    let i = this.y * 50;
    stroke(0)
   
    line(j, i, j + 100, i);
    line(j+100, i, j+100, i+100)
    line(j+100, i+100, j, i+100)
    line(j, i+100, j, i)
  }
}


//buttons from the keyboard to press
function keyPressed(){
  game.keyPressed()
}

setInterval((x,y)=>{
      x -= 35;
      y += 35;
  }, 500);