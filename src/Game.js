class Game {
  constructor() {
      this.player = new Player(250,350)
      //this.vinyl = new Vinyl()
      this.background = new Background()
  }

  setup(){
    cols = floor(WIDTH)
  rows = floor(HEIGHT)

  for (let   x = 0; x < rows; x++){
    for (let y = 0; y < cols; y++){
      let cell = new Cell(x, y);
      grid.push(cell)
    }
  }
  }

  draw() {
      background(150, 120, 230)
      for (let i = 0; i < grid.length; i++){
        grid[i].show()
      }
      this.player.draw()
      
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

   
  };
 
    
}
