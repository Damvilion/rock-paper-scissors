// let playerselection = 'rock'

function getCompChoice(){
    let choices = ["rock", "paper", "scissors"];
    let choice = choices[Math.floor(Math.random()*choices.length)];
    console.log(`The computer choice: ${choice}`)
    return choice;
};

function play(player_choice, comp_choice){
    let player = player_choice.toLowerCase();
    let comp = comp_choice;
    if(player == comp){
        return "This was a draw";
    }
    else if(player == "rock" && comp == "scissors"){
        return "You win!";
    }
    else if(player =="scissors" && comp =="paper"){
        return "You win";
    }
    else if(player =="paper" && comp == "rock"){
        return "you win";
    }
    else{
        return "You lost";
    }
}


// winner = play(playerselection, getCompChoice());

// console.log(`you played ${playerselection}`)
// console.log(winner);

function game(){
    for(let i = 0; i < 5; i++){
        let playerselection = window.prompt("What do you choose?");
        let winner = play(playerselection, getCompChoice());
        console.log(winner);
    }

}

game();