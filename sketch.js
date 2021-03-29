
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	binImage=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground (400,475,800,10);
	box1 = new Dustbin (450,395,20,150); 
	box2 = new Dustbin (550,395,20,150);
	box3 = new Dustbin (500,460,100,20,{isStatic:true});
  dustbin=createSprite(500,390,50,50);
  dustbin.addImage(binImage);
  dustbin.scale=0.5
  ball = new Paper (100,470,45,45);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  ball.display();
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:93,y:-93})
  }
}



