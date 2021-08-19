var database;
var GameState = 0;
var PlayerCount;

var allPlayers;
var cars,car1,car2,car3,car4;
var car1img, car2img,car3img,car4img,ground,groundimg,trackimg;
var form, game, player;
 
function preLoad(){
    car1img = loadImage("../images/car1.png");
    car2img = loadImage("../images/car2.png");
    car3img = loadImage("../images/car3.png");
    car4img = loadImage("../images/car4.png");
    groundimg = loadImage("../images/ground.png");
    trackimg = loadImage("../images/track.jpg");
}
function setup(){

    createCanvas(windowWidth-22,windowHeight-30);
    database = firebase.database();

    game = new Game();
    game.getState();
    game.start();

}


function draw(){


    if(PlayerCount===4){
        game.update(1);

    }
     
    if(GameState===1){
        clear();
        game.play();
    }

    if(gameState === 2){
        game.end();
      }
}







