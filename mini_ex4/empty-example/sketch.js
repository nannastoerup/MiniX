var count =0;
var bColor;
var pinkCount=0;
var yelCount=0;
var blackCount=0;

function setup() {
  createCanvas(700,600);
  bColor = color(0);


//black button
  button1 = createButton ('Black');
  button1.position(200,260);
  button1.size(60,20);
  button1.mousePressed(blackCounter);

//pink button
  button2 = createButton ('Pink');
  button2.position(270,260);
  button2.size(60,20);
  button2.mousePressed(pinkCounter);

//yellow button
  button3 = createButton ('Yellow');
  button3.position(340,260);
  button3.size(60,20);
  button3.mousePressed(yelCounter);
}

function draw() {
  count++;
  background(bColor);

//main bar
  push();
  rect(200,200,200,40,20);
  fill('black');
  textSize(17);
  textStyle(ITALIC);
  text('What is your eyecolor?',210,225);
  pop();

  if(count < 60) {
    bColor = color(0);

  } else if(count >120 && count < 180) {
    bColor = color('pink');

  } else if (count > 180 && count <= 240) {
    bColor = color('yellow');
    if(count == 240) {
      count = 0;
    }
  }
//pink counter
  textSize(25);
  fill('white');
  text(pinkCount,292,370);
  push();
  textSize(12);
  text('Pink eyed',270,340);
  pop();

//yellow counter
  text(yelCount,370,370);
  push();
  textSize(12);
  text('Yellowed eyed', 350,340);
  pop();

//black counter
  text(blackCount,221,370);
  push();
  textSize(12);
  text('Black eyed', 190,340);
  pop();

//people in the world
  textSize(20);
  text('People in the world',215,430);

}

function pinkCounter(){
  pinkCount++;
}

function yelCounter(){
  yelCount++;
}

function blackCounter(){
  blackCount++;
}

function mousePressed(){
  console.log(mouseX,mouseY);
}
