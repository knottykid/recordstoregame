class Vinyl {
    constructor(){
        this.col = setRandomPosition()
        this.row = setRandomPosition()
        
    }

    setRandomPosition(){
        return Math.floor(Math.random())
    }
}