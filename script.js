let pcScore = document.querySelector("#pcScore");
let humanScore = document.querySelector("#humanScore");
let rockBtn = document.querySelector("#rockBtn");
let paperBtn = document.querySelector("#paperBtn");
let scissorBtn = document.querySelector("#scissorBtn");
let pcChoice = document.querySelector("#pcChoice");
let winner = document.querySelector("#winner");
let reset = document.querySelector("#reset");

let pcMark = 0;
let humanMark = 0;

function getComputerChoice(){
    let choiceNum = Math.floor(Math.random() * 3);
    
    switch (choiceNum) {
        case 0 :
            pcChoice.textContent = "PC chooses : rock";
            return "ROCK";
        case 1 :
            pcChoice.textContent = "PC chooses : paper";
            return "PAPER";
        case 2 : 
            pcChoice.textContent = "PC chooses : scissor";
            return "SCISSOR";
    }
}

function playRound(human, pc){
    if ((pc == "ROCK") && (human == "SCISSOR") ||
        (pc == "SCISSOR") && (human == "PAPER") ||
        (pc == "PAPER") && (human == "ROCK")) {        
        pcMark++;
        pcScore.textContent = pcMark;
    }
    else if ((human == "ROCK") && (pc == "SCISSOR") ||
            (human == "SCISSOR") && (pc == "PAPER") ||
            (human == "PAPER") && (pc == "ROCK")) {        
        humanMark++;
        humanScore.textContent = humanMark;
    }

    if (humanMark == 5){
        winner.textContent = "BROO LETS GOO YOU WONN";
        resetGame();
    }
    else if (pcMark == 5){
        winner.textContent = "aint no way the pc won :sob:";
        resetGame();
    }
}

function resetGame(){
    let resetBtn = document.createElement("button");
    resetBtn.textContent = "Reset Game";
    
    reset.appendChild(resetBtn);

    resetBtn.addEventListener("click", (e) => {
        location.reload();
    });

    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorBtn.disabled = true;
}

rockBtn.addEventListener('click',(event) => {
    playRound("ROCK",getComputerChoice());
})

paperBtn.addEventListener('click',(event) => {
    playRound("PAPER",getComputerChoice());
})

scissorBtn.addEventListener('click',(event) => {
    playRound("SCISSOR",getComputerChoice());
})