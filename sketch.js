var stoprect;
var rect2;
var sq1,sq2


function setup() {
  createCanvas(800,400);
  stoprect=createSprite(400, 100, 50, 50);
  rect2=createSprite(400, 300, 50, 50);
  sq1=createSprite(100, 100, 50, 50);
  sq2=createSprite(200, 100, 50, 50);

  stoprect.velocityY=3;
  rect2.velocityY=-3;

  stoprect.shapeColor="green";
  rect2.shapeColor="black";
}




function draw() {
  background(255,255,255); 
  //sq2.x=mouseX
  //sq2.y=mouseY
  
  //if(isTouching(sq1,sq2)){
  //   sq1.shapeColor="blue";
  //   sq2.shapeColor="blue";
  // }else{
  //   sq1.shapeColor="red";
  //   sq2.shapeColor="red";
  // }

edges=createEdgeSprites();
stoprect.bounceOff(edges);
rect2.bounceOff(edges);
console.log(rect2.x-stoprect.x);

touch(stoprect,rect2);

  drawSprites();
}


