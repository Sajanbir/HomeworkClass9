
function setup() {
  createCanvas(400,400);
ball=createSprite(200,200,50,50)
ball.shapeColor="grey"
}

function draw() 
{

background("yellow")
if (keyDown("right")){
  background("red");

}
  


drawSprites()
}




