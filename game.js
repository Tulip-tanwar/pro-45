class Game{
    constructor(){
    }
    getState(){
    var gameStateRef=database.ref('gameState');
    gameStateRef.on("value",function(data){
        gameState=data.val();
        
    })
    }
    async start(){
        if (game===0){
            player=new Player();
            form=new Form ();
        form.display();
        background(schoolImage);
        
        }
        
    }
     play(){
        form.hide();
        background(schoolImage);
        classRoom.addImage("opt1",ClassRoomImage);
        hall.addImage("opt2",hallImage);

        
    }
    end(){

    }
}