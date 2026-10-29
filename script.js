let pcChoice = null;

function getComputerChoice(){
    choiceNum = Math.floor(Math.random() * 3);
    
    switch (choiceNum) {
        case 0 :
            pcChoice = "rock";
            break;
        case 1 :
            pcChoice = "paper";
            break;
        case 2 : 
            pcChoice = "scissor";
            break;
    }
    
    console.log(choiceNum)
    console.log(pcChoice)
}

getComputerChoice();