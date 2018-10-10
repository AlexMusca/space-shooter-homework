var x = 60;
var y = 60;

function setup() {
  createCanvas(800, 800);
}

function draw() {

fill(255, 0, 0);
  background(0);
  fill(255);

  if(keyIsPressed) {
    if(keyCode == LEFT_ARROW) {
        x = x - 5;
      }
    else if(keyCode == RIGHT_ARROW) {
        x = x + 5;
      }
    if(keyCode == UP_ARROW) {
      y = y - 5;
    }
    else if (keyCode == DOWN_ARROW) {
      y = y + 5;
    }
    if(key == 'd') {
      stroke(255, 255, 0);
line(x + 10, y + 5, width, y + 5);
    }
  }
fill(255);
noStroke();
rect(x, y, 10, 10);
}

// var angle = 0;
// var x = 25;
// var y = 25;
//
// function setup() {
//   createCanvas(800, 800);
//   background(150);
//   angleMode(DEGREES);
//
// }
//
// function draw() {
// strokeWeight(20);
//
//   translate(250, 250);
//
//   rotate(angle);
//   angle += 5;
//   line(x, y, width, height);
//
// }
