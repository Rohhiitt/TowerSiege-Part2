const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
 // stand2 = new Stand(700,200,200,10);
  stand3 = new Stand(740,200,200,10);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingShot = new SlingShot(this.polygon,{x:100,y:200});
 
  //level one
  block1 = new Block(300,275,30,40);
  //console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //second stack
  //level one
  block17 = new Block(665,190,25,35);
  block18 = new Block(690,190,25,35);
  block19 = new Block(715,190,25,35);
  block20 = new Block(740,190,25,35);
  block21 = new Block(765,190,25,35);
  block22 = new Block(790,190,25,35);
  block23 = new Block(815,190,25,35);

  //level two
  block24 = new Block(690,150,25,35);
  block25 = new Block(715,150,25,35);
  block26 = new Block(740,150,25,35);
  block27 = new Block(765,150,25,35);
  block28 = new Block(790,150,25,35);

  //level three
  block29 = new Block(715,110,25,35);
  block30 = new Block(740,110,25,35);
  block31 = new Block(765,110,25,35);

  //top
  block32 = new Block(740,70,25,35);


  

}
function draw() {
  background(56,44,44); 

  imageMode(CENTER);
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand3.display();
  
  strokeWeight(2);
  stroke(15);
  fill("sky blue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  fill("torquoise");
  block13.display();
  block14.display();
  block15.display();
  block29.display();
  block30.display();
  block31.display();
  fill("grey");
  block16.display();
  block32.display();

  
 

}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly(); 
}

function keyPressed(){
  if(keyCode === 32){
    slingShot.attach(this.polygon);
  }
}
