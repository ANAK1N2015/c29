const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var conejo;
var ground;
var cuerda;
function preload(){
backgroundImage=loadImage("background.png")
conejoImage=loadImage("conejo.png")
melonImage=loadImage("melon.png")

}
function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);
  cuerda = new Rope(5,{x:245,y:30});
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  var fruit_options={
    density:0.001
  }
  fruit=Bodies.circle(300,300,15,fruit_options);
Matter.Composite.add(cuerda.body,fruit);
//fruit_con=new Link(cuerda,fruit);
conejo=createSprite(230,500,100,100);
imageMode(CENTER);
}

function draw() 
{
  background(51);
  image(backgroundImage,width/2,height/2,490,690);
  ground.show();
  cuerda.show();
  image(melonImage,fruit.position.x,fruit.position.y,80,80);
  Engine.update(engine);
  

 
   
}
