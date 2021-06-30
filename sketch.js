var canvas ;
var groundImg, lotousImg , rainbowImg , unicornImg, ground2Img,coneImg,fenceImg,fireimg,lightningImg,bladeImg,stoneimg,bronzeImg,goldImg,silverimg,diamondImg;
var ground, lotous, rainbow , unicorn, ground2, ground3,cone,fence,fire,lightning,blade,stone,bronze,gold,silver,diamond;






function preload (){
  groundImg = loadImage("images/gr2.png");
  lotousImg = loadImage("images/lotus.png");
  rainbowImg = loadImage("images/bg.png");
  unicornImg = loadAnimation("images/unicorn/uni1.png","images/unicorn/uni2.png","images/unicorn/uni3.png","images/unicorn/uni4.png","images/unicorn/uni5.png","images/unicorn/uni6.png","images/unicorn/uni7.png");
  ground2Img = loadImage("images/gr.png");
  ground3img = loadImage ("images/gr3.png");
  obstacles = loadAnimation("images/obstacles/cone.png","images/obstacles/fence.png","images/obstacles/fire.png","images/obstacles/ninjaBlade.png","images/obstacles/stone.png");
  rewards = loadAnimation ("images/reward/gold.png","images/reward/silver.png","images/reward/bronze.png","images/reward/diamond.png");
 
}





function setup() {
    canvas = createCanvas (displayWidth-30,displayHeight-95)

    ground = createSprite ((displayWidth/2)-500,displayHeight-270);
    ground.addImage (ground2Img);
    ground.scale = 0.2;
    ground.velocityX = -2;

    ground2 = createSprite ((displayWidth/2)+250,displayHeight-300);
    ground2.addImage (groundImg);
    ground2.scale = 1.7;
    ground2.velocityX = -2;

    ground3 = createSprite (displayWidth,displayHeight-190);
    ground3.addImage (ground3img);
    ground3.velocityX= -2;

    rainbow = createSprite (displayWidth/2,160);
    rainbow.addImage (rainbowImg)

    unicorn = createSprite (displayWidth/2,displayHeight-315,displayWidth,300);
    unicorn.addAnimation("running",unicornImg)
    unicorn.scale=2.5;
    unicorn.velocityX = 1;

     
    
}






function draw() {
  background("lightblue"); 
  if (ground.x <-150) {
  ground.x = displayWidth+250;
  } 

  if (ground2.x <0) {
    ground2.x = displayWidth+100;
    } 
   camera.position.x = unicorn.x;


  drawSprites();

  
}