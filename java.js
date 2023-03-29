let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let playerselection = "";
let result = document.querySelector("#results");
let winCount = 0;
let loseCount = 0;
let compChoiceEl = document.querySelector("#choice");

rock.onclick = function(){
    playerselection = "rock";
    playgame();
}

paper.onclick = function(){
    playerselection = "paper"
    playgame();
}

scissors.onclick = function(){
    playerselection = "scissors";
    playgame();
}

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
        result.textContent = `This was a draw! Your score: ${winCount}, computer Score: ${loseCount} `;
        compChoiceEl.textContent = comp;
        return "This was a draw";
    }
    else if(player == "rock" && comp == "scissors"){
        winCount += 1;
        result.textContent = `You Win! Your score: ${winCount}, computer Score: ${loseCount} `;
        compChoiceEl.textContent = comp;
        
        return "You win!";
    }
    else if(player =="scissors" && comp == "paper"){
        winCount += 1;
        result.textContent = `You Win! Your score: ${winCount}, computer Score: ${loseCount} `;
        compChoiceEl.textContent = comp;
        
        return "You win";
    }
    else if(player =="paper" && comp == "rock"){
        winCount += 1;
        result.textContent = `You Win! Your score: ${winCount}, computer Score: ${loseCount} `;
        compChoiceEl.textContent = comp;
        
        return "you win";
    }
    else{
        loseCount += 1;
        result.textContent = `You lose! Your score: ${winCount}, computer Score: ${loseCount} `;
        compChoiceEl.textContent = `The computer choice: ${comp}`;
        
        return "You lost";
    }
}

function playgame(){
        let winner = play(playerselection, getCompChoice());
        
        console.log(winner);
    

}
