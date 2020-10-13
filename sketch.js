var fixedRect, movingRect

function setup() {
  createCanvas(400,400);
  fixedRect=createSprite(200, 0, 20, 20);
  fixedRect.shapeColor="green";
  movingRect=createSprite(200,400,20,20);
  movingRect.shapeColor="green";
  //fixedRect.velocityX=3
  fixedRect.velocityY=3
  //movingRect.velocityX=3
  movingRect.velocityY=-3
  
}

function draw() {
  background(0);
  
  
  console.log(movingRect.x-fixedRect.x);
  ecnuob(movingRect,fixedRect)
  drawSprites();
}
function ecnuob(obj1,obj2){
  if (obj1.x-obj2.x<=obj2.width/2+obj1.width/2
    && obj2.x-obj1.x<=obj2.width/2+obj1.width/2
    
    ){
    obj1.velocityX=-obj1.velocityX
    obj2.velocityX=-obj2.velocityX
  }
  if (obj1.y-obj2.y<=obj2.height/2+obj1.height/2
    && obj2.y-obj1.y<=obj2.height/2+obj1.height/2
    ){
      obj1.velocityY=-obj1.velocityY
      obj2.velocityY=-obj2.velocityY
  }

}
