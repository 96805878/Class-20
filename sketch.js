//NameSpacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball;
var ground;
function setup()
{
  createCanvas(400,400);

  engine = Engine.create(); //Variable universe that we can manipulate/change
  world = engine.world;

  var options = {   
    isStatic: false,
    restitution:2,
    density:1
    

  }
  ball = Bodies.circle(100, 50, 75, options);
  World.add(world, ball);

  
  var groundOptions ={
    isStatic: true
    
  }
  ground=Bodies.rectangle(0,390,400,10, groundOptions);
  World.add(world,ground);
  console.log(ball);



}

function draw() 
{
  background(51);
  Engine.update(engine);
  fill("white")
  ellipse(ball.position.x, ball.position.y, 75, 75);

  fill("red");
  rect(ground.position.x,ground.position.y,400,10);

}

/*
PHYSICS ENGINE - Matter.js
3 parts:
  Engine - Universe - Matter.Engine
  World - World - Matter.World
  Body - Objects - Matter.Body
*/

