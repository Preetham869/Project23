 var helicopterIMG, helicopterSprite; 
 var packageSprite,packageIMG;
 var packageBody,ground,part1,part2,part3;
 
 // parts of boxes
 
 var part1,part2,part3;
 
 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;
 
 var engine,world;
 
 var object;

 function preload()
 
 {
	
 helicopterIMG=loadImage("helicopter.png")
 packageIMG=loadImage("package.png")

 }

 function setup() {
	
 createCanvas(800, 700);
 rectMode(CENTER);
	
 packageSprite=createSprite(width/2, 80, 10,10);
 packageSprite.addImage(packageIMG)
 packageSprite.scale=0.2

 helicopterSprite=createSprite(width/2, 200, 10,10);
 helicopterSprite.addImage(helicopterIMG)
 helicopterSprite.scale=0.6

 groundSprite=createSprite(width/2, height-35, width,10);
 groundSprite.shapeColor=color(255)

 engine = Engine.create();
 world = engine.world;

 packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.75, isStatic:true});
 World.add(world, packageBody);
	
 part1 = Bodies.rectangle(4,650,20,100)
 World.add(world,part1)

 part2 = Bodies.rectangle(5,650,20,100)
 World.add(world,part2)

 part3 = Bodies.rectangle(2,650,20,100)
 World.add(world,part3)

 //Create a Ground

 ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 World.add(world, ground);

 // Parts of boxes

 part1 = new Box(430,620,15,100); 
 part2 = new Box(350,600,15,100);
 part3 = new Box(420,620,100,15);

 Engine.run(engine);
  
 }

 function draw() {
 
 Engine.update(engine) 

 rectMode(CENTER);

 background(0);

 packageSprite.x = packageBody.position.x 
 packageSprite.y = packageBody.position.y 
 
 part1.display();
 part2.display();
 part3.display();

 drawSprites();

 }

 function keyPressed() {
  
 if (keyDown ("DOWN_ARROW")) {
 
 // Look at the hints in the document and understand how to make the package body fall only on
 
 Matter.Body.setStatic(packageBody,false);
	
 }

 }

