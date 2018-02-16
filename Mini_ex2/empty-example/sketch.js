var img;
var img2;
var on = false;
var fsizex = 330;
var fsizey = 130;

function preload(){
  img = loadImage('assets/man.png');
  img2 = createImg('assets/fire.gif');
}

function setup() {
  createCanvas(800,700);
  img2.size(fsizex,fsizey);
}

function draw() {
//background
background('lightblue');

//house
fill('yellow');
rect(50,300,300,200);

//window 1
fill('silver');
rect(70,330,60,90);

//window 2
rect(270,330,60,90);

//window 3 - round
ellipse(200,340,70,70);

//door
rect(165,390,70,110);

//line window 1
line(98,332.6,98,421.6);
line(71,375,131,375);

//line window 2
line(271,375,331,375);
line(302,332,302,421);

//line window 3 - round
line(201,307,201,376);
line(165,340,235,340);

//doorhandel
fill('black')
ellipse(225,454.6,7,7);
line(215,449.6,229,449.6);

//smoke
fill('rgba(100,100,100,0.25)');
ellipse(100,175,60,60);
ellipse(100,183,60,60);
ellipse(120,155,60,60);
ellipse(110,160,60,60);
ellipse(130,174,60,60);
ellipse(110,165,60,60);
ellipse(112,140,60,60);
ellipse(115,130,60,60);
ellipse(100,120,60,60);
ellipse(120,110,60,60);
ellipse(110,100,60,60);
ellipse(114,90,60,60);
ellipse(113,80,60,60);
ellipse(112,70,60,60);

//chimney
fill('black')
rect(80,199,70,100);

//roof
triangle(50,300,351,300,201,176.5);

//man
imageMode(CENTER);
image(img,mouseX,450,100,100);
imageMode(CORNER);

img2.position(30,170);
//fire
if(on){
  img2.show();
//tint()
} else {
  img2.hide()
}
}

function mousePressed(){
if (mouseX > 166 && mouseX < 236 && mouseY > 390 && mouseY < 499){
  on = !on;

}
console.log(mouseX,mouseY);
}
