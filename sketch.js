const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ball, stand, stand1, ground, slingshot;
var box, box2, box3, box4, box5, box6, box7, box8, box9, box0;

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600, 590, 1200, 10)
  stand1 = new Ground(950, 430, 250, 10);
  ball = new Ball(200, 250, 25, 25);
  slingshot = new SlingShot(ball.body, {x: 200, y: 250});
  
  box = new Box(950, 250, 50, 50);

  box2 = new Box(975, 300, 50, 50);
  box3 = new Box(925, 300, 50, 50);

  box4 = new Box(900, 350, 50, 50);
  box5 = new Box(950, 350, 50, 50);
  box6 = new Box(1000,350, 50, 50);

  box7 = new Box(875, 400, 50, 50);
  box8 = new Box(925, 400, 50, 50);
  box9 = new Box(975, 400, 50, 50);
  box0 = new Box(1025,400, 50, 50);
}
function draw() {
  background(255,255,255);
  Engine.update(engine);
  ground.display();
  stand1.display();
  slingshot.display();
  ball.display();
  box.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box0.display();
}

  function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}

  function mouseReleased(){
  slingshot.fly();
  }