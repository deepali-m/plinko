
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var ball2,ball1;
var balls= []
function setup() {
  createCanvas(200,400);
  engine = Engine.create();
  world = engine.world;

 ball = new Ball(95,10,5,5);
 ob1 = new Obs(10,100,15,15)
 ob2 = new Obs(100,100,15,15)
 ob3 = new Obs(190,100,15,15)
 ob4 = new Obs(50,150,15,15)
 ob5 = new Obs(100,150,15,51)
 ob6 = new Obs(150,150,15,15)
 ob7 = new Obs(100,200,15,15)
 ob8 = new Obs(10,200,15,15)
ob9 = new Obs(190,200,15,15)
wall1 = new Wall(0,200,3,400)
wall2 = new Wall(200,200,3,400)
wall3 = new Wall(200,400,400,3)
wall4 = new Wall(50,350,10,100)
wall5 = new Wall(100,350,10,100)
wall6 = new Wall(150,350,10,100)
}
 
function draw() {
  Engine.update(engine);
background(212,65,99);

  ob1.display()
  ob2.display()
  ob3.display()
  ob4.display()
  ob5.display()
  ob6.display()
  ob7.display()
  ob8.display()
  ob9.display()
  ball.display() 
  wall1.display()
  wall2.display()
  wall3.display()
  wall4.display()
  wall5.display()
  wall6.display()


  if(frameCount % 30 === 0){
    ball1 = new Ball(random(10, 200), 10,10,rgb(random(1,255),random(1,255),random(1,255)));
    balls.push(ball1);
}
     
for(var i = 0; i < balls.length; i++){
  balls[i].display(); 
}
}
  function keyPressed(){
    if(keyCode === 32){
      var ball2 = new Ball(95,0,10,rgb(random(1,255),random(1,255),random(1,255)));
balls.push(ball2);
  console.log("hi")
    }
  }
  