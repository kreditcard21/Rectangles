var rect1, rect2;


function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  rect1 = createSprite(400, 200, 20, 40);
  rect1.shapeColor = "red";
  rect2 = createSprite(600, 200, 40, 20);
  rect2.shapeColor = "red";
  
}

function draw() {
  background(255,255,255);
  rect2.x= mouseX;
  rect2.y = mouseY; 
  
  if(rect2.x-rect1.x < rect2.width/2 + rect1.width/2 && rect1.x-rect2.x < rect2.width/2+rect1.width/2 
    && rect2.y-rect1.y < rect2.height/2+rect1.height/2 && rect1.y - rect2.y < rect2.height/2 + rect1.height/2){
    rect1.shapeColor = "green";
    rect2.shapeColor = "green";
  }
  else
  {
    rect1.shapeColor = "red";
    rect2.shapeColor = "red";
  }

  drawSprites();
}