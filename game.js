//Computer Choice for the game
function getComputerChoice(){

    //we will put each option in an array
    let options = ["rock","paper","scissors"]

    //now we choose one randomly
    //this will get random numbers from 0 to 2
    let chosen = Math.floor(Math.random() * 3)

    return options[chosen]
};

console.log(getComputerChoice())

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
    let choice = options[PromptForChoice()]

    //we return the `choice
    return choice
}

console.log(getHumanChoice())