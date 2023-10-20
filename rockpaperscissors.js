const getUserChoice = userInput => {
    userInput = userInput.toLowerCase{};
  if {userInput === 'rock'|| userInput === 'scissors' || userInput === 'paper'} {
        return userInput;
  } else {
    console.log{'Error, please type: rock, paper or scissors,'};
  }
}
