class Game{
    constructor(){
         
    }

    getState(){
       var gameStateRef = database.ref("GameState");
       gameStateRef.on("value",function(data){
           GameState = data.val();

       });
    }
    
    update(state){
        database.ref("/").update({
            GameState:state
        });
    }
     
    async start(){
        if(GameState===0){
            player = new Player();
            var playerCountRef = await database.ref("PlayerCount").once("value")
            if(playerCountRef.exists()){
                PlayerCount = playerCountRef.val();
                player.getCount();
            }
            
            
            form = new Form();
            form.display();

        }

    car1 = createSprite(100,200);
    car1.addImage("car1",car1img);
    car2 = createSprite(300,200);
    car2.addImage("car2",car2img);
    car3 = createSprite(500,200);
    car3.addImage("car3",car3img);
    car4 = createSprite(700,200);
    car4.addImage("car4",car4img);

    cars = [car1,car2,car3,car4];


       
}
    play(){
        
       form.hide();
    //    textSize(30);
    //    text("Game Start",100,100);
       Player.getPlayerInfo();

       if(allPlayers!==undefined){
        background("#c68767");
        Image(trackimg,0,-windowHeight*4,windowWidth,windowHeight*5);
          var index = 0;
          var x = 200;
          var y;

           for(var plr in allPlayers){
              index = index+1
              x = x+200
              y = windowHeight - allPlayers[plr].Distance;
              cars[index-1].x = x;
              cars[index-1].y = y;

              if(index===player.index){
                  cars[index-1].shapeColor = "red";
                  camera.position.x = windowWidth/2;
                  camera.position.y = cars[index-1].y;

              }
            //    if(plr==="player"+player.index){
            //        fill("red");

            //    }else{
            //        fill("black");
            //    }

            //    displayPosition += 20;
            //    textSize(15);
            //    text(allPlayers[plr].Name+": "+allPlayers[plr].Distance,120,displayPosition)
           }
           
       }

      
       

       if(keyIsDown(UP_ARROW)&&player.index!==null){
           player.distance+=50;
           player.update();
       }

       if(player.distance>3860){
           gameState = 2;
       }

       drawSprites();
   }

    end(){
    console.log("Game has Ended");
    game.update(2);
}
}