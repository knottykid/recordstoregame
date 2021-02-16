class Game {
  constructor() {
      this.x = WIDTH
      this.y = HEIGHT
      this.width = WIDTH/10
      this.height = HEIGHT/10
  }

  draw() {
      background(150, 120, 230)
      for (let i = 0; i < grid.length; i++){
        grid[i].show()
      }
  }

    
}
