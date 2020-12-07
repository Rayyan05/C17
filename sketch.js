
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var survivalTime= 0;
var ground;
var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
  bananaGroup = new Group();
  obstacleGroup = new Group();
}



function setup() {

  
  
  monkey = createSprite(20,300,20,20);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale = 0.1;
  

  

  
 
//monkey.setCollider("circle",0,0,50);
  
monkeyGroup = new Group();
  bananaGroup = new Group();
  
 
}


function draw() {
background(220);
  
 text("Survival Time: ",180,50);
  text(survivalTime,270,50);
  
  
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -(10+3*survivalTime/40);
  if(gameState === PLAY){
    
   
   if(keyDown("space")&& monkey.y >= 314) {
        monkey.velocityY = -12;
        survivalTime = survivalTime+Math.ceil(frameCount/frameRate());
    }
    
    monkey.velocityY = monkey.velocityY+0.5;
    
   
  
  monkey.collide(ground);
    
    if(ground.x < 0){
   ground.x = ground.width/2;
 }
      console.log(gameState);
    
obstacle();
    banana();
 
  
  if(obstacleGroup.isTouching(monkey)){
    gameState = END;
   
  }
   

  }
   if(gameState === END){
     ground.velocityX = 0;
     monkey.velocityY = 0;
    
     
      obstacleGroup.setVelocityXEach(0);
     bananaGroup.setVelocityXEach(0) 
     
      
 obstacleGroup.setLifetimeEach(-1);
     bananaGroup.setLifetimeEach(-1);
      
   }
 

  
 
drawSprites();

}
   
  

  


function obstacle(){
  if(frameCount%200 === 0){
  var obstacle = createSprite(400,335,10,10);
 obstacle.addImage("obstacle",obstacleImage);
  obstacle.velocityX = -(4+3*survivalTime/40);
    
    
     obstacleGroup.add(obstacle);
  obstacle.scale= 0.1;
    obstacle.lifetime = 100;
  
   
}
}

function banana(){
  if(frameCount%150 === 0){
    var banana= createSprite(400,250,10,10);
    banana.addImage(bananaImage)
    banana.velocityX = -(4+3*survivalTime/40);
    banana.scale = 0.1;
  
    bananaGroup.add(banana);
    banana.y = Math.round(random(250,198));
    banana.lifetime = 100;
    
  }
}




