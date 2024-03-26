function getComputerChoice(){
    const choices = ["Rock","Paper","Scissors"];
    const random = Math.floor(Math.random() * choices.length);
    let ComputerChoice = choices[random];
    return ComputerChoice;
}

function singleRound(playerSelection,computerSelection){
        playerSelection = playerSelection.toUpperCase();
        computerSelection = computerSelection.toUpperCase();
        if((playerSelection == "ROCK")&&(computerSelection == "PAPER"))
        {
            return "the machine is the winner";
        }
        else if((playerSelection == "ROCK")&&(computerSelection == "SCISSORS"))
        {
            return "You are the winner";
        }
        else if((playerSelection == "ROCK")&&(computerSelection == "ROCK"))
        {
            return "égalité";
        }
        else if((playerSelection == "PAPER")&&(computerSelection == "PAPER"))
        {
            return "égalité";
        }
        else if((playerSelection == "PAPER")&&(computerSelection == "SCISSORS"))
        {
            return "the machine is the winner";
        }
        else if((playerSelection == "PAPER")&&(computerSelection == "ROCK"))
        {
            return "You are the winner";
        }
        else if((playerSelection == "SCISSORS")&&(computerSelection == "PAPER"))
        {
            return "You are the winner";
        }
        else if((playerSelection == "SCISSORS")&&(computerSelection == "SCISSORS"))
        {
            return "égalité";
        }
        else if((playerSelection == "SCISSORS")&&(computerSelection == "ROCK"))
        {
            return "the machine is the winner";
        }
        
}
function playGame(){
    let score=[0,0];
    for (i=0;i<5;i++)
    {
        let playerSelection = prompt("Enter your choice: Rock, Paper, or Scissors").toUpperCase();
        let opponent = getComputerChoice();
        let result = singleRound(playerSelection,opponent);
        if(result == "the machine is the winner"){
            score[1]+=1;
            console.log(score);
        }
        else if(result == "You are the winner"){
            score[0]+=1;
            console.log(score);
        }

    }
    if(score[0]<score[1]){
        console.log("The machine is the winner");
    }
    else if(score[0]>score[1]){
        console.log("You are the winner");
    }
    else{
        console.log("égalité");
    }

}
playGame();