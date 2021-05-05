const Engine = Matter.Engine;
const Body = Matter.Body;
const World = Matter.World;
const Bodies = Matter.Bodies;

var poly;
var sling;
var ground1;
var engine;
var world;
function setup()
 {
  createCanvas(800,400);
   engine = Engine.create();
   world = engine.world;
 
 

  poly = new ball(100,200,20);
  ground1 = new Ground(415,250,225,15);
  sling = new Slingshot(poly.ball,{x:100,y:200});
  block4 = new Box (390,180,20,20);
  block5 = new Box (365,180,20,20);
  block6 = new Box (445,160,20,20);
  block7 = new Box (424,160,20,20);
  block8 = new Box (390,160,20,20);
  block9 = new Box (430,140,20,20);
  block1 = new Box (460,180,20,20);
  block2 = new Box (435,180,20,20);
  block3 = new Box (415,180,20,20);
 
  

}

function draw() 
{
  
  background("black"); 
  Engine.update(engine) ;
  poly.Display();
  ground1.display();
  sling.Display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  
}


function mouseDragged()

  {
    Matter.Body.setPosition(poly.ball,{x:mouseX,y:mouseY})
  }

  function mouseReleased()
{
    sling.fly();
    
}