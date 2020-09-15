
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boyImg;
var groundObject
function preload()
{
boyImg = loadImage("boy.png");
treeImg = loadImage("tree.png");	
}
var mango1,mango2,mango3,mango4,mango5
var stone
var slingshot
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	mango1 = new Mango(450,400,20);
	mango2 = new Mango(480,460,20);
	mango3 = new Mango(600,460,20);
	mango4 = new Mango(600,300,20);
  mango5 = new Mango(700,400,20);
  
  //tree1 = new Tree(430,650);
  stone = new Stone(20,540,20);
 slingshot = new SlingShot(stone.body,{x:90,y:530})
	groundObject=new ground(width/2,670,width,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  image(boyImg,20,530,170,170)
 image(treeImg,430,300,380,380)
 
 //tree1.display()

  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  groundObject.display();
  stone.display();
  slingshot.display();

detectcollision(stone,mango1)
detectcollision(stone,mango2)
detectcollision(stone,mango3)
detectcollision(stone,mango4)
detectcollision(stone,mango5)

  drawSprites();

 
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
   if (keyCode === 32) {
   slingshot.attach(stone.body)
}
}

function detectcollision(lstone,lmango){
   mangoBodyPosition=lmango.body.position;
    stoneBodyPosition=lstone.body.position;
     var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
      if(distance<=lmango.r+lstone.r) { Matter.Body.setStatic(lmango.body,false); } }

