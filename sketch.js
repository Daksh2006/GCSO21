var car,wall;
var speed,weight;
var deformation;
function setup() {
  createCanvas(800,400);
  createSprite(30, 200, 30, 100);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50,200,50,50);
  car.shapeColor = "green";
  wall=createSprite(750,200,10,height/2);
  wall.shapeColor = "white";
  car.velocityX= speed;
  deformation = 0;
}

function draw() {
  background(0);  
  deformation = 0.5 * weight * speed * speed/22500;
  bounce(car,wall);
  drawSprites();

  if(wall.x - car.x < (car.width + wall.width)/2)
  {  car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;
    if(deformation>180)
    {
      car.shapeColor=color(255,0,0);
    }

    if(deformation<180 && deformation>100){
      car.shapeColor=color(255,0,0);
    }

    if (deformation<100){
      car.shapeColor=color(0,255,0);
    }
  }
}

function bounce(obj1,obj2){
  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2) {
      obj1.velocityX = obj1.velocityX * (-1);
      obj2.velocityX = obj2.velocityX * (-1);
}
if (obj1.y - obj2.y < obj2.height/2 + obj1.height/2
  && obj2.y - obj1.y < obj2.height/2 + obj1.height/2){
    obj1.velocityY = obj1.velocityY * (-1);
    obj2.velocityY = obj2.velocityY * (-1);
}
}