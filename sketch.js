
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperball
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

// paperball=new Paper(200,50,20)                 
ground = new Ground(600,height,1200,20)

paperball = new Paper(100,650,30)

dustbin1= new Dustbin(585,680,150,20)
dustbin2= new Dustbin(500,640,20,100)
dustbin3= new Dustbin(670,640,20,100)
	Engine.run(engine);
  
}

function draw() {
  background(0);
  Engine.update(engine);
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
    paperball.display();
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paperball.body,paperball.body.position,{x:25,y:-45})
  }
}






