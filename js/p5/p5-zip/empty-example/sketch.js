var img;
function preload() {
  img = loadImage("./albumcoverpng");
}
function setup() {
    createCanvas(400,400);
    image(img, 0, 0);
}
function setup() {
    
}

function draw() {
    rect(100, 100, 100, 100);
    rect(150, 150, 100, 100);
    line(200,100,250,150);
    line(100,200,150,250);
    line(100,100,150,100)
}