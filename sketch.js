
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var teacher;
var student1,student2,student3,student4,student5;
var school;
var form;
var schoolImage;
var hallImage;
var classRoomImage;
var classRoom,hall,option
var gameState=0;



function preload(){
schoolImage=loadImage("school.png");
hallImage=loadImage("hall.jpg");
classRoomImage=loadImage("ClassRoom.jpg");

	
}

function setup() {
	createCanvas(1200, 700);
    classRoom=createSprite(700,350,20,20);
	hall=createSprite(200,350,20,20);
	
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  drawSprites();
 
}



