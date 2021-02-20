class Vinyl {
  constructor(x, y) {
    this.x = random(10, 500);
    this.y = random(10, 300);
    this.width = w;
    this.height = w;
    this.lp = random(lp);
  }
  draw() {
    // this.x -= 3;

    // stroke(255);
    // strokeWeight(4);
    // fill(0);
    image(this.lp, this.x, this.y, this.width, this.height);
  }
  //   constr uctor(x, y, r) {
  //     this.x = x;
  //     this.y = y;
  //     this.r = r;
  //     this.brightness = 0;
  //   }

  //   setup() {
  //     for (let i = 0; i <= 5; i++) {
  //       for (let j = 0; j <= 3; j++) {
  //         let x = 20 + 100 * i;
  //         let y = 20 + 100 * j;
  //         let r = 20;
  //         let v = new Vinyl(x, y, r);
  //         vinyl.push(v);
  //       }
  //     }
  //   }

  //   mousePressed() {
  //     vinyl.forEach((activeVinyl, index) => {
  //       if (this.grab(this.player, activeVinyl)) {
  //         this.vinyl.splice(index, 1);
  //       }
  //     });
  //   }
  //   draw() {
  //     //    for (let lp of vinyl){
  //     //        lp.move();
  //     //        lp.show();
  //     //        lp.grab(mouseX, mouse)
  //     //    }

  //     for (let i = 0; i < vinyl.length; i++) {
  //       vinyl[i].show();
  //       vinyl[i].move();
  //       vinyl[i].grab(mouseX, mouseY);
  //     }
  //   }

  //   grab(px, py) {
  //     let d = dist(px, py, this.x, this.y);
  //     if (d < this.r) {
  //       console.log("click");

  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }

  move() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  //show() {
  // stroke(255);
  // strokeWeight(4);
  // fill(0);
  // rect(this.x, this.y, this.width, this.height);
  // ellipse(this.x, this.y, this.r * 2);
  // this.x = this.x + random (-2, 2)
  // this.y = this.y + random (-2, 2)
  //}
}

// //     setRandomPosition(){
// //         return Math.floor(Math.random())
// //     }
// //}
