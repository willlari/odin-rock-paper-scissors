function computerPlay(){
    let playId = Math.random()*3;
    let play ='';

    if ( playId < 1 ){
        play = "rock";
    } else if( playId > 0 && playId < 2){
        play = "paper";
    } else {
        play = "scissors";
    }
return play;
}

function playerPlay(){
    let play = prompt("what do you play?");
    let lowerCasePlay = play.toLowerCase();
    return lowerCasePlay;
}
function playGame(computerPlay, playerPlay){
    let message = "YOU LOOSE!";
    if(computerPlay == playerPlay){
        message = "IT'S A TIE!"
    } else {
        if (computerPlay == "rock"){
            if(playerPlay == "paper" ){
                message = "YOU WIN!";
            } 
        } else if (computerPlay == "paper"){
            if(playerPlay == "scissors" ){
                message = "YOU WIN!";
            }
        } else {
            if(playerPlay == "rock" ){
                message = "YOU WIN!";
            }
        }
    }
    console.log(message);
}

function game(repetition){
    for(let i = 0; i < repetition; i++){
        playGame(computerPlay(), playerPlay());
    }
}

game(5);