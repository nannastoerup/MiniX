var a=0;
var b=0;
var c=0;
var d=0;
var e=0;
var f=0;
var g=0;
var h=0;
var i=0;
var bcol=255;
var rcol=0;
var gcol=0;
var ycol=0;
var pcol=209;
var graycol=64;
var lbcol=255;
var lgcol=255;
var lcol=255;

function setup() {
  createCanvas(600,600);
  background(0);
}

function draw() {
  //red circle
  push();
  strokeWeight(8);
  stroke(255,rcol,rcol);
  translate(200,200);
  rotate(radians(a));
  line(150,150,150,150);
  pop();
  //blue circle
  push();
  strokeWeight(8);
  stroke(bcol,bcol,255);
  translate(300,300);
  rotate(radians(b));
  line(180,180,180,180);
  pop();
  //greeen circle
  push();
  strokeWeight(10);
  stroke(gcol,230,gcol);
  translate(300,250);
  rotate(radians(c));
  line(125,125,125,125);
  pop();
  //yellow circle
  push();
  strokeWeight(5);
  stroke(255,255,ycol);
  translate(100,250);
  rotate(radians(d));
  line(100,100,100,100);
  pop();
  //pink circle
  push();
  strokeWeight(6);
  stroke(226,59,pcol);
  translate(125,420);
  rotate(radians(e));
  line(115,50,115,50);
  pop();
  //gray circle
  push();
  strokeWeight(6);
  stroke(graycol,graycol,graycol);
  translate(321,135);
  rotate(radians(f));
  line(200,40,200,40);
  pop();
  //lightblue circle
  push();
  strokeWeight(10);
  stroke(lbcol,247,255);
  translate(328,457);
  rotate(radians(g));
  line(100,100,100,100);
  pop();
  //lightgreen circle
  push();
  strokeWeight(7);
  stroke(148,lgcol,159);
  translate(310,468);
  rotate(radians(h));
  line(150,150,150,150);
  pop();
  //purple circle
  push();
  strokeWeight(7);
  stroke(204,153,lcol);
  translate(478,166);
  rotate(radians(i));
  line(120,100,120,100);
  pop();

//rotate speed
  a=a+0.5;
  b=b-0.3;
  c=c+0.4;
  d=d-0.3;
  e=e+0.3;
  f=f+0.5;
  g=g-0.25;
  h=h+0.3;
  i=i+0.2;
  //colors
  bcol=bcol-0.2;
  rcol=rcol+0.2;
  gcol=gcol+0.2;
  ycol=ycol+0.2;
  pcol=pcol-0.1;
  graycol=graycol+0.1;
  lbcol=lbcol-0.2;
  lgcol=lgcol+0.2;
  lcol=lcol-0.2;
}

function keyPressed(){
  if(keyCode === ENTER){
  draw();
  setup();
  redraw();
  }
}
