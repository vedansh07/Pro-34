const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup (){
 Canvas = createCanvas(windowWidth/2,windowHeight/1.5);
 engine = Engine.create();
 world= engine.world;

 /*let canvasmouse = Mouse.create(canvas.elt);
 canvasmouse.pixelRatio = pixelDensity();
 let options= {
  mouse:canvasmouse
}
mConstraint=MouseConstraint.create(engine,options);
World.add(world,mConstraint);*/

  bob1=new Pendulum(300,350,50);
  bob2=new Pendulum(350,350,50);
  bob3=new Pendulum(400,350,50);
  bob4=new Pendulum(450,350,50);
  bob5=new Pendulum(500,350,50);

  sling1=new Sling(bob1.body,);
  sling2=new Sling(bob2.body,); 
  sling3=new Sling(bob3.body,);  
  sling4=new Sling(bob4.body,);
  sling5=new Sling(bob5.body,);

}

function draw(){
  engine.update();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();  

  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();


    function mouseDragged(){
      Matter.Body.setPosition(pendulum.body1,{x : mouseX, y : mouseY});

}
}