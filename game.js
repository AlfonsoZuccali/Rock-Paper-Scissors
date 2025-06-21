//Computer Choice for the game
function getComputerChoice(){

    //we will put each option in an array
    let options = ["rock","paper","scissors"]

    //now we choose one randomly
    //this will get random numbers from 0 to 2
    let chosen = Math.floor(Math.random() * 3)

    return options[chosen]
}

function getHumanChoice(){

    //this functions returns a number from 0 to 2, which are the positions of the options rock, paper or scissors in the array
    function PromptForChoice() {

        let input = Number(prompt("What will you choose?\n(0.rock | 1.paper | 2.scissors)\nPlease enter the number of the option chosen"))

        //the user must choose 0, 1 or 2
        while(input < 0 || input > 2){
            window.alert("Please put a number from 0 to 2")

            input = Number(prompt("What will you choose?\n(0.rock | 1.paper | 2.scissors)\nPlease enter the number of the option choose"))

        }

        //we return the number
        return input
    }
    
    //we will put each option in an array
    let options = ["rock","paper","scissors"]
    
    //we access the array with the index given by the user
    //we return the choice
    let choice = options[PromptForChoice()]

    return choice.toLowerCase()
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice){
    console.log(computerChoice)

    //if boths choices are the same, is a tie
    if(humanChoice === computerChoice){
        console.log('TIE!')
    }
    if (humanChoice === 'scissors'){
        
        //scissors win against paper and lose against rock
        if(computerChoice === 'paper'){
            console.log('You won, scissors beats paper')
            humanScore++
        }
        else if(computerChoice === 'rock'){
            console.log('You lost, rock beats scissors')
            computerScore++
        }

    }else if(humanChoice === 'rock'){
        
        //rock wins against scissors and lose against paper
        if(computerChoice === 'scissors'){
            console.log('You won, rock beats scissors')
            humanScore++
        }
        else if(computerChoice === 'paper'){
            console.log('You lost, paper beats rock')
            computerScore++
        }

    }else if(humanChoice === 'paper'){

        //paper wins against rock and lose agains scissors
        if(computerChoice == 'rock'){
            console.log('You won, paper beats rock')
            humanScore++
        }
        else if(computerChoice === 'scissors'){
            console.log('You lost, scissors beat paper')
            computerScore++
        }
    }
}

function playGame(){
    
    //lets play three rounds
    for(let i = 0; i < 3;i++){
        playRound(getHumanChoice(),getComputerChoice())
    }

    if(humanScore > computerScore){
        console.log('Congratulations! You have won the game!')
    }
    else{
        console.log('You lost the game. Maybe try again later.')
    }
}

playGame()




