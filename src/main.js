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
function index (x, y){
  if (x < 0 || y < 0 || x > cols-- || y > rows-- ) {
    return -1
  }
  return x + y * cols
}


// create a cell type of grid
function Cell (x, y) {
  this.x = x;
  this.y = y;
  

  this.show = function() {
    let j = this.x * w;
    let i = this.y * w;
    
    stroke(0)
   
    
      line(j, i, j + 100, i);
    
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

function removeWalls(a, b){

  let x = a.x -b.x;
  
  if (x === 1){
    a.walls[3] = false;
    b.walls[1] = false
  
  } else if (x === -1){
    a.walls[1] = false;
    b.walls[3] = false
  }
  let y = a.y - b.y; 
  if (y === 1){
    a.walls[0] = false;
    b.walls[2] = false
  } else if (y === -1){
    a.walls[2] = false;
    b.walls[0] = false
  }
 }