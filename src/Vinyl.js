class Vinyl {
 
    
        constructor(x, y, r) { 
            this.x = x
            this.y = y
            this.r = r 
            this.brightness = 0
        }

       setup () {
        for (let i = 0; i <= 5; i++) {
            for (let j = 0; j <= 2; j++ ){
            let x = 20 + 100 * i
            let y = 20 + 100 * j;
            let r= 20;
            let v = new Vinyl (x, y, r);
            vinyl.push(v)
        }
    }
       }

       mousePressed (){
        for (let i = 0; i <vinyl.length; i ++){
            if (vinyl[i].grab (mouseX, mouseY))
            vinyl,splice(i, 1)
          }
       }
      draw (){

    //    for (let lp of vinyl){
    //        lp.move();
    //        lp.show();
    //        lp.grab(mouseX, mouse)
    //    }
        
        for (let i = 0; i < vinyl.length; i ++){
            vinyl[i].show()
            vinyl[i].move()
           vinyl[i].grab (mouseX, mouseY)
        }
            
        }
     

        grab(px, py){
            let d = dist(px, py, this.x, this.y)
            if (d < this.r) {
                console.log("click")
                this.brightness = 220
                return true;
            } else {
                return false
            }
        }

        move (){
            this.x = this.x + random (-2, 2)
        this.y = this.y + random (-2, 2)
        }

        show() {
            stroke (255);
            strokeWeight (4);
            fill(0)
            ellipse(this.x, this.y,this.r * 2)
            // this.x = this.x + random (-2, 2)
            // this.y = this.y + random (-2, 2)
        }
    }
        

        
    

//     setRandomPosition(){
//         return Math.floor(Math.random())
//     }
 //}

