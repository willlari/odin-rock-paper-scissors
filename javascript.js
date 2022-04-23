//This function generates a random play for computer
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

function playGame(computerPlay, playerPlay, userScore, computerScore){

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
    return message;
}

//TESTING BUTTON NEW GAME
let message;
let userScore =0;
let computerScore =0;

const btnRock = document.querySelector('#btnRock');
btnRock.addEventListener('click', () =>{
    message = playGame(computerPlay(), "rock", userScore, computerScore);
    attributeScore(message);
});
const btnPaper = document.querySelector('#btnPaper');
btnPaper.addEventListener('click', () =>{
    message =  playGame(computerPlay(), "paper");
    attributeScore(message);
});
const btnScissors = document.querySelector('#btnScissors');
btnScissors.addEventListener('click', () =>{
    message = playGame(computerPlay(), "scissors");
    attributeScore(message);
});
const btnNew = document.querySelector('#btnNew');
btnNew.addEventListener('click', () =>{
    computerScore=0;
    userScore=0;
    printScore();
});

function attributeScore(message){
    if (message == "YOU LOOSE!"){
        computerScore ++;
    } else if ( message = "YOU WIN!"){
        userScore ++;
    }
    printScore();
}


function printScore(){
    const divUserScore = document.getElementById('divUserScore');
    const divCompuScore = document.getElementById('divCompuScore');

    divCompuScore.textContent = + computerScore.toString();
    divUserScore.textContent = + userScore.toString();
 
}
    

function printMessage(){
    const results = document.querySelector("#results" );
    const res = document.createElement('div');
    res.textContent = message;
    results.appendChild(res);
}





