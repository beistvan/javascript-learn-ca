//console.log("hi");

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("Error!");
  }
};

//console.log(getUserChoice("Paper")); // should print 'paper'
//console.log(getUserChoice("fork")); // should print 'Error!' and `undefined`

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === "bomb") {
    return "You won!";
  } else if (userChoice === computerChoice) {
    return "The game is a tie!";
  } else if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
};

//console.log(determineWinner("paper", "scissors")); // 'The computer won!'
//console.log(determineWinner("paper", "paper")); // 'The game is a tie!'
//console.log(determineWinner("paper", "rock")); // 'The user won!'
//console.log(determineWinner("bomb", "rock")); // 'The user won!'

const playGame = () => {
  const userChoice = getUserChoice("scissors");
  const computerChoice = getComputerChoice();
  console.log("You threw: " + userChoice);
  console.log("The computer threw: " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();

