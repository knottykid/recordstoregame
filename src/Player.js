class Player {
    constructor(x, y){
        this.x = x
        this.y = y 
        this.width = w
        this.height = w
    }

    moveUp (){
        this.y -= this.height
        if (this.y < 0) {
            this.y = 0
        }
    }
    moveDown () {
        this.y += this.height
        if(this.y + this.height > HEIGHT){
            this.y =  HEIGHT - this.height 
        }
    }
     moveLeft(){
         this.x -= this.width 
         if(this.x < 0){
             thix.x = 0
         }
     }
     moveRight(){
         this.x += this.width 
         if(this.x + this.width > WIDTH){
             this.x = WIDTH - this.width 
         }
     }

    draw(){

        rect(this.x, this.y, this.width, this.height)
    }
}