//sets win/lose conditions for each option
const rock = {
    beats: null,
    toString: function(){
        return "rock";
    }
};

const paper = {
    beats: null,
    toString: function(){
        return "paper";
    }
};

const scissors = {
    beats: null,
    toString: function(){
        return "scissors";
    }
};

const gun = {
    toString: function(){
        return "bruh";
    }
}

rock.beats = scissors;
paper.beats = rock;
scissors.beats = paper;

//computer and player selection process
function compSelect() {
    let options = [rock, paper, scissors]; //declares available options
    return options[Math.floor(Math.random() * options.length)]; //selects random option from options array
};

function playerSelect(option) {
    if(typeof option !== 'string') return null; //guard clause to make sure argument is string
    switch(option.toLowerCase()){
        case "rock":
            return rock;
        case "paper":
            return paper;
        case "scissors":
            return scissors;
        case "gun":
            return "what the fuck";
    }
    console.log("oops, that's not a valid option!")
    return false;
};

function playRound(){
    let compChoice = compSelect();
    let playerChoice = playerSelect(prompt());
    console.log("Computer threw "+compChoice.toString()+".");
    console.log("You threw "+playerChoice.toString()+".");
    if(compChoice.beats == playerChoice){
        console.log("Computer Won!");
    } else if(playerChoice.beats == compChoice) {
        console.log("Player Won!");
    } else {
        console.log("Tie!");
    }

};

function game() {
    for(let i=0; i<5; i++){
        playRound();
    }
};

game();