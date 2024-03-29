const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber;
var stone; 
var iron;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    

    rubber = new Rubber(100,400,40)

    stone = new Stone(200,400,200,100)

    iron = new Iron(300,400,70,50)

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);

   // console.log(hammer.x)
  //  console.log(hammer.y)


    plane.display();
    hammer.display();
    rubber.display();
    stone.display();
    iron.display();
    
 
}