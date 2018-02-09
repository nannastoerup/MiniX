function setup() {
  createCanvas(700,500,WEBGL);
}

function draw() {
background('lightblue')
rotateX(frameCount * 0.02);
rotateY(frameCount * 0.02);
box(400,100,100);
stroke('grey')
fill('rgba(0,255,0,0.00)')
box(100,400,100);
box(100,100,400);

}
