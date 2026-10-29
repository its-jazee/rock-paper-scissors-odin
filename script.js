// let pcChoice = null;
// let humanChoice = null;
let pcScore = 0;
let humanScore = 0;

function getComputerChoice(){
    let choiceNum = Math.floor(Math.random() * 3);
    
    switch (choiceNum) {
        case 0 :
            console.log("PC chooses : rock");
            return "rock";
        case 1 :
            console.log("PC chooses : paper");
            return "paper";
        case 2 : 
            console.log("PC chooses : scissor");
            return "scissor";
    }
}

function getPlayerChoice(){
    let humanChoice = prompt("Let's play rock paper scissor in the console! Enter your choice :");
    console.log("You chooses : " + humanChoice);
    return humanChoice;
}

function playRound(human,pc){
    if ((pc.toUpperCase() == "ROCK") && (human.toUpperCase() == "SCISSOR")){
        pcScore++;
        console.log("Take the L, rock beat scissors!");
    }
    else if ((pc.toUpperCase() == "SCISSOR") && (human.toUpperCase() == "PAPER")){
        pcScore++;
        console.log("Take the L, scissors beat paper!");
    }
    else if ((pc.toUpperCase() == "PAPER") && (human.toUpperCase() == "ROCK")){
        pcScore++;
        console.log("Take the L, paper beat rock!");
    }
    else if ((human.toUpperCase() == "ROCK") && (pc.toUpperCase() == "SCISSOR")){
        humanScore++;
        console.log("Respect, rock beat scissor!");
    }
    else if ((human.toUpperCase() == "SCISSOR") && (pc.toUpperCase() == "PAPER")){
        pcScore++;
        console.log("Respect, scissor beat paper!");
    }
    else if ((human.toUpperCase() == "PAPER") && (pc.toUpperCase() == "ROCK")){
        pcScore++;
        console.log("Respect, paper beat rock!");
    }
    else
        console.log("It's a tie!");
}

playRound(getPlayerChoice(),getComputerChoice());