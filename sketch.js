var paper1,groundSprite,world,waste1,waste2,waste3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(800,690,1600,20);
	paper1 = new Paper(100,360,25);
	
	
	waste1=new Waste (1000,680,150,20);
	waste2=new Waste (1070,587,10,185);
   	waste3=new Waste (930,587,10,185);

	World.add(world, ground);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  keyPressed();
 paper1.display(); 
 waste1.display();
 waste2.display();
 waste3.display();
 ground.show();
}

function keyPressed(){
if (keyCode===UP_ARROW){
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:4,y:-4});
}

}

