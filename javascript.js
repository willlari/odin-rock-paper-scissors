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
function newGame(){
    playGame(computerPlay(), playerPlay());
}

//game(5)

//TEstint DOM 

const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = "This is some text";

container.appendChild(content);

const contentRed = document.createElement('p');
contentRed.classList.add('contentRed');
contentRed.textContent = "I am red text";
contentRed.style.color = "red";
container.appendChild(contentRed);

const h3Blue = document.createElement('div');
h3Blue.classList.add('h3Blue');
h3Blue.textContent = "Blue H3";
h3Blue.style.color = "blue";
h3Blue.style.background = "red";
container.appendChild(h3Blue);

const division = document.createElement('div');
division.style.background = "purple";

const textDiv = document.createElement('h1');
textDiv.textContent="je suis le textDiv"


const pDiv = document.createElement('p');
pDiv.textContent="je suis le sous texte de textDiv"
division.appendChild(textDiv);
division.appendChild(pDiv);

container.appendChild(division);



//TESTING BUTTON NEW GAME

const btn = document.querySelector('#btn');
btn.addEventListener('click', newGame);
btn.style.background='red';


