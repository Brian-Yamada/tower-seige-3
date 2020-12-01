

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var player,ground,block1,block2,block3,block4;
var block5,block6,block7,block8,block9;
var block10,block11,block12,block13,block14,block15,block16,pentagon;
var sling,ground1;
var bg="bg.jpg";
var score=0;
var backgroundImg;
function preload(){
//bgImg1=loadImage("bg.jpg");
//bgImg2=loadImage("bg1.jpg");
getBackGroundImage();
}

function setup() {
  createCanvas(1500,900);
  //createSprite(400, 200, 1200, 800);
  engine = Engine.create();
  world = engine.world;


 ground = new Ground(900, 400, 400, 15);
 ground1 = new Ground(500, 800, 2000, 20);
 // block1 = new Block(870, 275, 30, 40);
 // block2 = new Block(700, 275, 30, 40);
 
  block3 = new Block(830, 305, 30 ,40);

  block4 = new Block(860, 305, 30 ,40);

  block5 = new Block(890, 305, 30 ,40);

  block6 = new Block(920, 305, 30, 40);

  block7 = new Block(950, 305, 30, 40);

  block8 = new Block(830, 265, 30, 40);
  block9 = new Block(860, 265, 30, 40);

  block10 = new Block(890, 265, 30, 40);

  block11 = new Block(920, 265, 30, 40);
  
  block12 = new Block(950, 265, 30, 40);

  block13 = new Block(860, 225, 30, 40);

  block14 = new Block(890, 225, 30, 40);

  block15 = new Block(920, 225, 30, 40);

  block16 = new Block(890, 185, 30, 40);

  
  pentagon=new Pentagon(300,400)
  sling=new Slingshot(pentagon.body,{x:300 , y:400})
  
  Engine.run(engine);

}

function draw() {
  console.log(backgroundImg)
  if(backgroundImg){
    background(backgroundImg);
}

  textSize(35);
  fill("yellow")
 
  getBackGroundImage();
  drawSprites();
 
  ground.display();
 
  fill("purple")
  block3.display();
  block3.score();
  
  block4.display();
  block4.score();


  block5.display();  
    block5.score();

 
  block6.display();
  block6.score();


  block7.display();
  block7.score();

  block8.display();
  block8.score();
 
  block9.display();
  block9.score();

  block10.display();
  block10.score();

  block11.display();
  block11.score();

  block12.display();
  block12.score();

  block13.display();
  block13.score();

  block14.display();
  block14.score();
 
  block15.display();
  block15.score();

  block16.display();
  block16.score();

 pentagon.display();
sling.display();
fill("yellow")
ground1.display();
}
function mouseDragged(){
  Matter.Body.setPosition(pentagon.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  sling.fly();
  
}
function keyPressed(){
  if (keyCode===32){
    sling.attach(pentagon.body);
  }
  }
  async function getBackGroundImage(){
   
    var response = await fetch("https://worldtimeapi.org/api/timezone/America/New_York");
    var responseJSON = await response.json();
    var dateTime = responseJSON.datetime;
    var hour = dateTime.slice(11,13);
    //var bg;
    console.log(hour);
    console.log(dateTime);
    if(hour >=6 && hour <19){
      bg = "bg.jpg";
    }
    else{
      bg = "bg1.jpg";
    }
  
    backgroundImg = loadImage(bg);
  }