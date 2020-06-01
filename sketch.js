var bullet,wall;
var speed,weight,thickeness;

function setup() {
  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(50,200,50,50);
  wall=createSprite(1200,200,thickeness,height/2);
  wall.shapecolor=(80,80,80);
  bullet.velocityX=speed;

  thicness=random(22,83);
}


  

function draw() {
  createCanvas(1600,400);
  function hasCollided(wall,bullet){
    bulletRightEdge=lbullet.x+lbullet.width;
    wallLeftEdge=lwall.x;
    if(bulletRightEdge>=wallLeftEdge){
      return true;
    }
    return false;
  }
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickeness*thickeness*thickeness);
    if (damage>10){
      wall.shapecolor=color(255,0,0);
    }
    if(DAMAGE<10){
      wall.shapecolor=color(0,255,0);
    }

  }


  
}