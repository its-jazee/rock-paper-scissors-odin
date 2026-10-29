// let pcChoice = null;
// let humanChoice = null;
let pcScore = 0;
let humanScore = 0;

function getComputerChoice(){
    let choiceNum = Math.floor(Math.random() * 3);
    
    switch (choiceNum) {
        case 0 :
            return "rock";
        case 1 :
            return "paper";
        case 2 : 
            return "scissor";
    }
    
    // console.log(choiceNum);
    // console.log(pcChoice);
}

function getPlayerChoice(){
    let humanChoice = prompt("Let's play rock paper scissors! Enter your choice :");
    return humanChoice;
    // console.log(humanChoice);
}

function playRound(pc,human){
    if ((pc.toUpperCase() == "ROCK") && (human.toUpperCase() == "SCISSORS")){
        pcScore++;
        console.log("Take the L, rock beat scissors!");
    }
    else if ((pc.toUpperCase() == "SCISSORS") && (human.toUpperCase() == "PAPER")){
        pcScore++;
        console.log("Take the L, scissors beat paper!");
    }
    else if ((pc.toUpperCase() == "PAPER") && (human.toUpperCase() == "ROCKS")){
        pcScore++;
        console.log("Take the L, paper beat rock!");
    }
    else if ((human.toUpperCase() == "ROCK") && (pc.toUpperCase() == "SCISSORS")){
        humanScore++;
        console.log("Respect, scissors beat rock!");
    }
    else if ((human.toUpperCase() == "SCISSORS") && (pc.toUpperCase() == "PAPER")){
        pcScore++;
        console.log("Respect, paper beat scissors!");
    }
    else if ((human.toUpperCase() == "PAPER") && (pc.toUpperCase() == "ROCKS")){
        pcScore++;
        console.log("Respect, rock beat paper!");
    }
    else
        console.log("It's a tie!");
}

playRound(getComputerChoice(),getPlayerChoice());