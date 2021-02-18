# recordstoregame
a fun game about collecting vinyl
This game is my first project using javascript and j5
Is inspired  on the international Record Store Day and Discogs.
The main purpose of the game is to resemble the feeling of getting some Exclusive LTD RSD Vinyl.

Use the Arros to move around, and the click to collect.

// Introduction to Conditional Statements
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/3.1-conditional-statements.html
// https://youtu.be/1Osb_iGDdjk
// https://editor.p5js.org/codingtrain/sketches/z_yjYIha
let on = false
function setup() {
  createCanvas(600, 400);
}

function draw() {
  if (on) {
    background(0, 255, 0)
  }else {
  background(0);
  }

  stroke(255);
  strokeWeight(4);
  noFill();

  if (mouseX > 300) {
    fill(255, 0, 200);
  }

  ellipse(300, 200, 100, 100);
}

function mousePressed(){
  if(mouseX > 250 && mouseX < 350){
    on = !on
  }
}
