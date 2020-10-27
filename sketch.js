var PLAY=0
var END=1;
var gameState=0
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
    var SurvivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600)
  
  
  
  monkey=createSprite(80,520,20,20);
monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  
  ground=createSprite(400,550,900,10);
  ground.velocityX=-4;
console.log(ground.x)
  
  obstacleGroup=new Group();
  
}


function draw() {
  
      background("white");

if(gameState===PLAY){
     SurvivalTime=0;

  stroke("white")
  textSize(20);
  fill("white")
  
  stroke("black")
  textSize(20)
  fill("black")
  SurvivalTime=Math.ceil(frameCount/frameRate)
     text("SurvivalTime:"+SurvivalTime,100,50)
}
  

  if(keyDown("space")){

    monkey.velocityY=-3;
  }

      ground.x=ground.width/4;


       SurvivalTime=0;

                  monkey.velocityY=monkey.velocityY+0.1;
  
  spawnObstacles();
  spawnfood();

   monkey.collide(ground)
drawSprites();
  
  
  

  
  
  
  
}


   function spawnObstacles(){
  if (World.frameCount % 300 == 0) {

  obstacle=createSprite(400,520,10,10)
  obstacle.addImage(obstaceImage);
  obstacle.velocityX=-4;
  obstacle.scale=0.2;
  obstacle.lifetime=300;
    
    
  }
  
}

function spawnfood(){

  if (World.frameCount % 80 == 0) {

  foods=createSprite(200,300,20,20)
            foods.y = Math.round(random(120,300));

  foods.addImage(bananaImage)
  foods.scale=0.1
  foods.velocityX=-2;
    foods.lifetime=-300
    
}
}
