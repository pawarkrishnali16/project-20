var car, wall;
var speed, weight;
var deformation;


function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed=random(55,90);
  weight=random(400,1500);

  car=createSprite(50,200,50,50);

  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor=color(80,80,80);
  

}

function draw() {
  background(255,255,255); 
  car.velocityX = speed;
  
  if(car.x-wall.x<wall.width/2+car.width/2&&
    wall.x-car.x<wall.width/2+car.width/2&&
    car.y-wall.y<wall.height/2+car.height/2&&
    wall.y-car.y<wall.height/2+car.height/2){
      deformation=(0.5*weight*speed*speed)/22500;
    if(deformation<100){
      car.shapeColor=color(0,255,0);
    }
    if(deformation>100 && deformation<180){
      car.shapeColor=color(230,230,0);
    }
    if(deformation>1800){
      car.shapeColor=color=color(255,0,0);
    }

  }
  else{
    wall.shapeColor=color(80,80,80);
    car.shapeColor=color("pink");
  }
  drawSprites();
}