const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var stone,tree,ground,boy,chain;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9;

function preload(){
  boyImage = loadImage("Images/boy.png");	
}

function setup() {
	createCanvas(1600, 800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

	ground = new Ground(800,790,1600,16);
	tree = new Tree(1270,450);
    
  stone = new Stone(158,627,50);
   
	boy = new Boy(240,700);

	mango1 = new Mango(1250,332,50);
	mango2 = new Mango(1400,320,68);
	mango3 = new Mango(1070,278,70);
	mango4 = new Mango(1180,195,60);
	mango5 = new Mango(1150,390,65);
	mango6 = new Mango(1500,300,75);
  mango7 = new Mango(1370,200,55);
  mango8 = new Mango(1280,180,70);
  mango9 = new Mango(1200,270,75);

  chain = new Chain(stone.body,{x: 165, y:625});

	Engine.run(engine);
  
}

function draw() {
  	
  rectMode(CENTER);
  background("lightblue");

  fill(0);
  stroke(0);
  text("PRESS SPACE KEY TO GET ANOTHER CHANCE",10,20);	
	
	
  boy.display();
  
  tree.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  chain.display();
  stone.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);

  drawSprites();
  
}

function detectCollision(lstone,lmango){
   sPos = lstone.body.position
   mPos = lmango.body.position
   var distance = dist(sPos.x,sPos.y,mPos.x,mPos.y);
   if(distance <= lstone.r + lmango.r)
   {
     Matter.Body.setStatic(lmango.body,false);
   }

}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x: mouseX, y:mouseY});
  Matter.Body.setStatic(stone.body,false);
}

function mouseReleased(){
	chain.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body,{x:158 , y:627});
    chain.attach(stone.body);
    Matter.Body.setStatic(stone.body,true);
  }
}
