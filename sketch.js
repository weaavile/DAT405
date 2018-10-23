//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//00_Template
//The purpose of this sketch is to provide a basic template
//for P5.js projects

//Initialization function
function setup() {
  createCanvas(500, 500);
  background(200);

  //top left diagonal / bottom right diagonal
  strokeWeight(10);
  stroke(0, 225, 0);
  line(50, 50, 450, 450);
  //top across
  stroke(225, 0, 225);
  line(50, 50, 450, 50);
  //top left down
  stroke(0,255,255);
  line(50, 50, 50, 450);
  //bottom left diagonal / top right diagonal
  stroke(225,225,0);
  line(50, 450, 450, 50);
  //top right down
  stroke(225,100,0);
  line(450, 450, 450, 50);
  //bottom across
  stroke(0,255,100);
  line(50, 450, 450, 450);

  noStroke();
  //blue
  fill(0, 0, 225);
  ellipse(50, 50, 80, 80);
  //green
  fill(0, 225, 0);
  ellipse(50, 450, 80, 80);
  //red
  fill(225, 0, 0);
  ellipse(450, 50, 80, 80);
  //yellow
  fill(225, 225, 0);
  ellipse(450, 450, 80, 80);

}
