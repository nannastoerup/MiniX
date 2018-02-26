//var img;
var words = ["please wait","loading","still loading","be patient","don't touch","just wait","not working?","you got a problem?","need help?"];
var words = random(words);

function preload(){
  //img = loadImage('assets/mouse.png');

}

function setup() {
 createCanvas(windowWidth, windowHeight);
 background(255);
 frameRate (10);
}

function draw() {
 noStroke();
 fill(255,80);
 rect(0, 0, width, height);
 drawThrobber(12);
}

function drawThrobber(num) {
  push();
  translate(width/2, height/2);

  var cir = 360/num*(frameCount%num);
  rotate(radians(cir));
  noStroke();
  //image(img,30,0,30,30);
  fill('pink');
  triangle(0,0,48,10,76,65);
  pop();
}

function mousePressed() {
  fill('pink');
  textSize(50)
  text(random(words),mouseX,mouseY);

}
