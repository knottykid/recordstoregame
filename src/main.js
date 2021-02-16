const game = new Game()

function preload(){}

function setup() {
  createCanvas(WIDTH, HEIGHT);
  cols = floor(WIDTH)
  rows = floor(HEIGHT)

  for (let   x = 0; x < rows; x++){
    for (let y = 0; y < cols; y++){
      let cell = new Cell(x, y);
      grid.push(cell)
    }
  }
}
function draw() {
  game.draw()
}
function Cell (x, y) {
  this.x = x;
  this.y = y;
  this.show = function() {
    let j = this.x * 100;
    let i = this.y * 100;
    stroke(0)
   
    line(j, i, j + 100, i);
    line(j+100, i, j+100, i+100)
    line(j+100, i+100, j, i+100)
    line(j, i+100, j, i)
  }
}
