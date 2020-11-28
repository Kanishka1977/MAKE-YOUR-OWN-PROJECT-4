var YellowBanana,BlackBanana,background,monkey;
var background_img,monkey_image,black_img,yellow_img,cloud_img;

var gameState = "start";

function preload(){

  background_img= loadImage("New folder/background.jpeg");
  monkey_img= loadImage("New folder/monkey2.png");
  black_img= loadImage("New folder/Black2banana.png");
  yellow_img= loadImage("New folder/banana2.png");
  cloud_img= loadImage("New folder/cloud2.png");


}



function setup() {
  createCanvas(displayWidth,displayHeight);
  game= new Game();
  cloudsGroup= new Group();
  YellowBananaGroup = new Group();
  BlackBananaGroup = new Group ();
 
}

function draw() {
  background(background_img);  
  
  if(gameState==="start"){
    game.displayFirstPage();

  }

  if(gameState==="play"){
    console.log(frameCount);
    game.displayThirdPage();

      if(frameCount===10000){
        gameState="end";
        
          

      }
  }
  
  
}