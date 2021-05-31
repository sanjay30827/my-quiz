class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){

    question.hide();

    background("yellow");

    text("RESULT",425,200);

    Contestant.getPlayerInfo();

    if(allContestant !==undefined){

      var display_position = 230
      
      for(var plr in allContestant){
        fill("blue");
        textSize(20);
        text("*NOTE: contestant who has answered correct are highlighetd in green color ",130,230)
        var correctAns = "2";


        if(correctAns === allContestant[plr].answer){

             fill("green");}
          else

             fill("red")

             display_position+=30
             

             text(allContestant[plr].name + ": " + allContestant[plr].answer, 120,display_position)
        }

      }
      
    }

  }


