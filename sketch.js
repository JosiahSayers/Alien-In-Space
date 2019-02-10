let x = 50;
let y = 50;

let xSpeed = 3;
let ySpeed = 3;

let box;

let randR;
let randG;
let randB;

bgColor = [0, 0, 0];

let ornery;
let counter = 0;

let startX;
let startY;

let starsX = [];
let starsY = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  randomize();
  img = loadImage('alien.png');
  img2 = loadImage('alienTongue.png');
  ornery = false;

  for(let i=0; i<1000; i++){
    starsX[i] = random(0,windowWidth);
    starsY[i] = random(0,windowHeight);
  }
}

function draw() {
  clear();

  background(bgColor[0], bgColor[1], bgColor[2]);

  stroke('white');
  for (let i=0; i<1000; i++){
    point(starsX[i], starsY[i]);
  }

  x += xSpeed;
  y += ySpeed;
  
  if(x + 75 > width || x < 0){
    xSpeed *= -1;
    ornery = true;
    counter = 0;
  }
  if(y + 100 > height || y < 0){
    ySpeed *= -1;
    ornery = true;
    counter = 0;
  }

  if(mouseIsPressed){
    if(mouseButton === LEFT){
      x = 0; 
      y = 0;
      if(xSpeed < 0)
      {
        xSpeed *= -1;
      }
      if(ySpeed < 0){
        ySpeed *= -1;
      }
    }
  }

  if(ornery)
  {
    image(img2, x, y, 75, 100);
  } else {
  image(img, x, y, 75, 100)
  }

  if(counter > 75)
  {
    ornery = false;
    counter = 0;
  }

  if(cornerCheck()){
    bgColor[0] = random(50, 256);
    bgColor[1] = random(50, 256);
    bgColor[2] = random(50, 256);

    print('Corner hit!');
  }
  counter++;
}

function randomize(){
  randR = random(50, 256);
  randG = random(50, 256);
  randB = random(50, 256);
}

function cornerCheck(){
  if (x + 80 >= width && y + 60 >= height){
    return true;
  }
  else if (x + 80 >= width && y <= 0){
    return true;
  }
  else if (x <= 0 && y + 60 >= height){
    return true;
  }
  else if (x <= 0 && y <= 0){
    return true;
  }
  else{
    return false;
  }
}