var bubble1;
var bubble2;
var bubble3;
var bubble4;
var bubble5;
var img;
var img2;
var siz = 150

function preload(){
  img = createImg('assets/run.gif');
  img2 = loadImage('assets/track.jpg');
}

function setup() {
  createCanvas(675,633);
  noCursor();
  img.size(siz,siz);
  //blue
  bubble1 = new Bubble(190,250,100);
  //black
  bubble2 = new Bubble(300,250,100);
  //yellow
  bubble3 = new Bubble(240,300,100);
  //green
  bubble4 = new Bubble(360,300,100);
  //red
  bubble5 = new Bubble(410,250,100);

}

function draw() {
  background(img2,0,0);

  //man
  imageMode(CENTER);
  img.position(mouseX,mouseY);

  //blue
  stroke('blue');
  //bubble1.move();
  bubble1.show();

  //black
  stroke('black');
  //bubble2.move();
  bubble2.show();

  //yellow
  stroke('yellow');
  //bubble3.move();
  bubble3.show();

  //green
  stroke('green');
  //bubble4.move();
  bubble4.show();

  //red
  stroke('red');
  //bubble5.move();
  bubble5.show();

  //img.bounce(bubble);
  if (dist(bubble1.x, bubble1.y, mouseX,mouseY)<bubble1.r){
    bubble1.x = bubble1.x-5;
    bubble1.y = bubble1.y+5;
  }

  if (dist(bubble2.x,bubble2.y,mouseX,mouseY)<bubble2.r){
    bubble2.x = bubble2.x+5;
    bubble2.y = bubble2.y-5;
  }

  if (dist(bubble3.x,bubble3.y,mouseX,mouseY)<bubble3.r){
    bubble3.x = bubble3.x+6;
    bubble3.y = bubble3.y-0;
  }

  if (dist(bubble4.x,bubble4.y,mouseX,mouseY)<bubble4.r){
    bubble4.x = bubble4.x-0;
    bubble4.y = bubble4.y+4;
  }
  if (dist(bubble5.x,bubble5.y,mouseX,mouseY)<bubble5.r){
    bubble5.x = bubble5.x-4;
    bubble5.y = bubble5.y-7;
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x
    this.y = y
    this.r = r
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, this.r);
  }
}
function mousePressed(){
console.log(mouseX,mouseY);
}
