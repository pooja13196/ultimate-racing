var canvas,background;
var gameState=0;
var playerCount;
var allPlayers;
var distance=0;
var healthbar=100;
var speed=0;
var form,player,game;
var database;

var car1,car1img,car2,car2img;
var track;
var cars;

var  obs1,obs2,obs1img,obs2img,beep,pop;


function preload(){
  obs1img=loadImage("images/barrel.png");
  obs2img= loadImage("images/roadblock.png");
//   // car2img=loadImage("");
  car1img=loadImage("images/red_car.png"); //images\red_car.png
  track=loadImage("images/trackimg.jpg");
  

 beep=loadSound("JeepS.mp3");
//  pop=loadSound("pop_new.mp3");
}


function setup() {
  
  canvas=createCanvas(displayWidth-5,displayHeight-5);
  database=firebase.database();
  game=new Game();
  game.getState();
  game.start();


 // obs1.debug=true;

}

function draw() {
  if(frameCount %60 ==0){
    console.log(playerCount)
  }
  background("white");  
  if(playerCount===2){
    gameState=1;
    console.log(gameState)
    game.update(1)
    //update function is not called
  }
  if(gameState===1){
    clear();
    game.play();
  }

  if(gameState === 2){
    game.end();
  }
 // drawSprites();
}