class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement("h2");

    }

    hide(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();

    }


    display(){
        var title = createElement("h2");
        title.html("Car Racing Game");
        title.position(windowWidth/2-70,30);

       
        this.input.position(windowWidth/2-70,windowHeight/4+70);
        this.button.position(windowWidth/2-7,windowHeight/4+95);
        
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            PlayerCount = PlayerCount+1;
            player.index = PlayerCount;
            
           
            player.update();
            player.updateCount(PlayerCount);

            
            this.greeting.html("Hello "+player.name);
            this.greeting.position(windowWidth/2-60,windowHeight/2-60);
   
        });


    }
}