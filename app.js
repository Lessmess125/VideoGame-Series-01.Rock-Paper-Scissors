//if i click rock, rock word will show up after the sentence: user choice and at the same time, the computer will generate a choice,
//that will be shown on screen after computer-choice:
//1.
const computerHeading = document.getElementById('computer-choice')
const userHeading = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
let userChoice //global variable
let computerChoice
let result

//2. Get all the possible choices. We're gonna use a querySelector to get all of them, and i'm gonna pick up everything that is a button.
//in this case we're not gonna select by class, just by tag name
const possibleChoices = document.querySelectorAll('button')
console.log(possibleChoices)

//3.Now, i will grab the buttons and for each button y will trigerr addEventListener to listen up for click event,
//so if i click any of the buttons i want something to happen
function triggerAction(e){
  //what i want to happem is: get the target id. SO whatever i clicked i want to get the id (paper, scissor or rock) and i wanna save that
  //as the user chocie
  userChoice = e.target.id
  console.log(userChoice)
  userHeading.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}

  possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', triggerAction))//reference function


//the next thing i wanna do is generate a random computer choice:
function generateComputerChoice(){
    //i wanna get a random number
    const randomNumber = Math.floor(Math.random() * possibleChoices.length + 1) //cause is an array like node (nodeList Object). We can also multiply it by # 3 
    //cause is the nummber of elements in possibleChoices nodeList.
    console.log(randomNumber)

    if(randomNumber === 1){
        computerChoice = 'rock'
    }
    if(randomNumber === 2){
        computerChoice = 'scissors'
    }
    if(randomNumber === 3){
        computerChoice = 'paper'
    }
    computerHeading.innerHTML = computerChoice  
}

//Now let's get the result
function getResult(){
    if(computerChoice === userChoice){
        result = "It's a draw!"
        console.log(result)
    }
    if(computerChoice === 'rock' && userChoice === 'paper'){
        result = "You win!"
        console.log(result)
    }
    if(computerChoice === 'rock' && userChoice === 'scissors'){
        result = "Machine wins!"
    }
    if(computerChoice === 'paper' && userChoice === 'scissors'){
        result = "Machine wins!"
    }
    if(computerChoice === 'paper' && userChoice === 'rock'){
        result = "You win!"
    }
    if(computerChoice === 'scissors' && userChoice === 'rock'){
        result = "You win!"
    }
    if(computerChoice === 'scissors' && userChoice === 'paper'){
        result = "You win!"
    }
    resultDisplay.innerHTML = result 
}
