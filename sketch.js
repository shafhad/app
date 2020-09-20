var  gameState="serve";
var doctor1, police1;

var doctor;
var drone ,drops;
var police;
var bg1,bg2,bg3;
var text1;
var people,people2;
var coronagrp;
var infected1=0;
var infected2=0;
var people1grp;
var people2grp;
var msg;
var restart;
var sound1;
var sound2;
var sound3;

function preload(){

  doctor1img=loadImage("image/doctor1.png");
  police1img=loadImage("image/police1.png");
  person1=loadImage("image/person1.png");
  person2=loadImage("image/person2.png");
  doctorimg=loadImage("image/doctor.png");
  coronavirus=loadImage("image/coronavirus.PNG");
  policeimg=loadImage("image/police2.png");
  msgimg=loadImage("image/bg.jpg");
  bg1img=loadImage("image/bg1.jpg");
  bg2img=loadImage("image/bg2.PNG");
  bg3img=loadImage("image/bg3.jpg");
  text1img=loadImage("image/text1.png");
  droneimg=loadImage("image/drone.png");
  dropsimg=loadImage("image/drops.png");
  restartimg=loadImage("image/restart.png");
  sound1=loadSound("s1.mp3", false);
  sound2=loadSound("s2.mp3", false);
   sound3=loadSound("s3.mp3", false);
}



function setup() {
  createCanvas(displayWidth-10,displayHeight-10);


coronagrp= new Group();
people1grp=new Group();
people2grp=new Group();





bg3=createSprite(600,300);
bg3.addImage("bg3",bg3img);
bg3.scale=3;
bg3.visible=false;

bg1=createSprite(750,420);
bg1.addImage("bg1",bg1img);
bg1.scale=1.3;
bg1.visible=false;


bg2=createSprite(750,425);
bg2.addImage("bg2",bg2img);
bg2.scale=2;
bg2.visible=false;


text1=createSprite(800,100);
text1.addImage("text1",text1img);


doctor1=createSprite(500,600,10,10);
doctor1.addImage("doctor1",doctor1img);
doctor1.scale=0.2;
//doctor1.visible=false;

doctor= createSprite(displayWidth-200,displayHeight-120,10,10);
doctor.addImage("doctor",doctorimg);
doctor.scale=0.5;
doctor.visible=false;

police1=createSprite(1000,600,20,20);
police1.addImage("police1",police1img);
police1.scale=0.8;
//police1.visible=false;

police=createSprite(1200,630,20,20);
police.addImage("police",policeimg);
police.visible=false;



drone=createSprite(0,100);
drone.addImage("drone",droneimg);
drone.scale=0.2;
drone.visible=false;

msg=createSprite(750,430);
msg.addImage("msg",msgimg);
msg.visible=false;
msg.scale=0.9;

restart=createSprite(800,500);
restart.addImage("restart",restartimg);
restart.scale=0.3;
restart.visible=false;


fill("white");
textSize(40);
}

function draw() {
  background(0);
  if (gameState==="serve"){
   
    bg3.visible=true;
    doctor1.visible=true;
    police1.visible=true;
   text1.visible=true;
   bg2.visible=false;
   restart.visible=false;
   bg1.visible=false;
   doctor.visible=false;
   police.visible=false;
   drone.visible=false;
   if (mousePressedOver(doctor1)){

    gameState="start";
    sound1.play();
  
  
  }
  if (mousePressedOver(police1)){
  
    gameState="play";
    
    sound1.play();
  }

   
  }

  


  if (gameState==="start"){

    
    doctor1.visible=false;
    police1.visible=false;
    //doctor1.destroy();
    //police1.destroy();

   bg3.visible=false;
   bg1.visible=true;
   text1.visible=false;
    doctor.visible=true;
    doctor.x=mouseX;
    doctor.y=mouseY;
    
    if (doctor.isTouching(coronagrp)){

      coronagrp.destroyEach();
    
      sound2.play();
     }
    

if (coronagrp.isTouching(people1grp)){
people1grp.destroyEach();
coronagrp.destroyEach();
infected1+=1;
sound3.play();

}

if (infected1===1){
  gameState="over";
}
   

  People();
  Corona();
 


}


 

  
if(gameState==="play"){



  
  doctor1.visible=false;
  text1.visible=false;
  police1.visible=false;
    bg3.visible=false;
    bg2.visible=true;
    police.visible=true;
    drone.visible=true;

   if (coronagrp.isTouching(people2grp)){

   people2grp.destroyEach();
   coronagrp.destroyEach()
   infected2+=1;
   sound3.play();
   }
   if (infected2===1){
    gameState="end";
  }
  


    
    People2();
    Corona();

    if (mousePressedOver(drone)){
      drops=createSprite(drone.x,drone.y);
      drops.addImage("drops",dropsimg);
      drops.velocityY=10;
      drops.scale=0.1;
      sound2.play();
      if (drops.isTouching(coronagrp)){

        coronagrp.destroyEach();
        drops.visible=false;
       }
      }


}

drone.x=mouseX;






  



if (gameState==="over"){

  msg.visible=true;
  restart.visible=true;
 
}

if (gameState==="end"){
  msg.visible=true;
  restart.visible=true;
 
}



if (mousePressedOver(restart)){
  reset();
 
}




  






  drawSprites();


  if (gameState==="start"){
  fill("red");
    textSize(40);


    text("INFECTED: "+infected1,1210,100);
  }


if (gameState==="play"){
  fill("black");
    textSize(40);


    text("INFECTED:"+infected2,900,50);
  }
}


function People(){

if (frameCount%50===0){

var people=createSprite(0,730,20,20);
people.velocityX=4;
people.scale=0.1;
people1grp.add(people);
var rand=Math.round(random(1,2));
 switch(rand){
   case 1:people.addImage("people1",person1);

   break ;

   case 2:people.addImage("people2",person2);

   break;

   default : break;
 }
 

}



}

function Corona(){

if (frameCount%70===0){

var  corona=createSprite(100,0,20,20);
corona.addImage("corona",coronavirus);
corona.x=random(30,800);
corona.velocityY=2;
corona.scale=0.2;
coronagrp.add(corona);

}




}

function People2(){

  if (frameCount%50===0){
  
  var people2=createSprite(0,630,20,20);
  people2.velocityX=4;
  people2.scale=0.5;
  people2grp.add(people2);
  people2.lifetime=250;
  var rand=Math.round(random(1,2));
   switch(rand){
     case 1:people2.addImage("people1",person1);
  
     break ;
  
     case 2:people2.addImage("people2",person2);
  
     break;
  
     default : break;
   }
   
  
  }
  
  
  
  }
  function reset(){
    gameState="serve";
 coronagrp.destroyEach();
 people1grp.destroyEach();
 people2grp.destroyEach();
msg.visible=false;
bg3.visible=true;
doctor1.visible=true;
police1.visible=true;
text1.visible=true;
bg2.visible=false;
restart.visible=false;
bg1.visible=false;
doctor.visible=false;
police.visible=false;
drone.visible=false;

infected1=0;
infected2=0;
  }