var rect1, rect2;
var go1, go2, go3, go4, go5;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  rect1 = createSprite(400, 200, 20, 40);
  rect1.shapeColor = "red";
  rect2 = createSprite(600, 200, 40, 20);
  rect2.shapeColor = "red";
  go1 = createSprite(200, 200, 60, 60);
  go2 = createSprite(200, 260, 60, 60);
  go3 = createSprite(200, 310, 60, 60);
  go4 = createSprite(200, 370, 60, 60);
  go5 = createSprite(200, 430, 60, 60);
}

function draw() {
  background(255,255,255);
  rect2.x= mouseX;
  rect2.y = mouseY; 

  go1.shapeColor = "red";


  if(isTouching(rect2, go1)){
    text ("Function returned true", 100, 100);
    go1.shapeColor = "blue";
  }

  else{
    text("Function returned false", 100, 100);
  }

  drawSprites();
}

function isTouching(object1,object2)
{
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) 
    {
        return true;
    }
else {
      return false;
  }
}