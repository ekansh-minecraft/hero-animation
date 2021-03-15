const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var GamingBackgroundImage;
var block1;
var block2;
var block3;
var block4;
var block5;
var block6;
var block7;

var block8;
var block9;
var block10;
var block11;
var block12;
var block13;
var block14;

var block15;
var block16;
var block17;
var block18;
var block19;
var block20;
var block21;

var block22;
var block23;
var block24;
var block25;
var block26;

var superman;
var chain;
var monster;





function preload() {
//preload the images here

GamingBackgroundImage = loadImage("GamingBackground.png")



}

function setup() {
  createCanvas(1146, 851);

  engine = Engine.create();
  world = engine.world;

  // create sprites here
   
  ground = new Ground(0,600,1564,20)

  block1 = new Block(480,570,30,40)
  block2 = new Block(480,530,30,40)
  block3 = new Block(480,490,30,40)
  block4 = new Block(480,450,30,40)
  block5 = new Block(480,410,30,40)
  block6 = new Block(480,370,30,40)
  block7 = new Block(480,330,30,40)

  block8 = new Block(520,570,30,40)
  block9 = new Block(520,530,30,40)
  block10 = new Block(520,490,30,40)
  block11 = new Block(520,450,30,40)
  block12 = new Block(520,410,30,40)
  block13 = new Block(520,370,30,40)
 
  block14 = new Block(560,570,30,40)
  block15 = new Block(560,530,30,40)
  block16 = new Block(560,490,30,40)
  block17 = new Block(560,450,30,40)
  block18 = new Block(560,410,30,40)
  block19 = new Block(560,370,30,40)
  block20 = new Block(560,330,30,40)
  block21 = new Block(560,290,30,40)

  block22 = new Block(600,570,30,40)
  block23 = new Block(600,530,30,40)
  block24 = new Block(600,490,30,40)
  block25 = new Block(600,450,30,40)
  block26 = new Block(600,410,30,40)

  superman = new Fly(300,450,50)
  monster = new Monster(830,410,20,20)
  chain = new Slingshot(superman.body,{x:80,y:480})


}

function draw() {
  Engine.update(engine)

  background(GamingBackgroundImage);

  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  monster.display()

  superman.display();
}

function mouseDragged()
{
  console.log("mouseDragged has been called - " + superman.body)
  Matter.Body.setPosition(superman.body, { x: mouseX, y:mouseY});
}

function mouseReleased()
{
   console.log("mouseReallesed")

  chain.fly()
  
}
