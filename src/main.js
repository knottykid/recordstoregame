const game = new Game()

function preload(){}

function setup() {
  createCanvas(WIDTH, HEIGHT);
  game.setup()
  
}
function draw() {
  game.draw()
}
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

function keyPressed(){
  game.keyPressed()
}
