function letsPlay(){
      
    function userInput() { 
    let userChoices = prompt( "choose : rock, paper or scissors");
    userChoices = userChoices.toLowerCase();
    return userChoices;}

    function computerInput() {
    let computerChoices = ["rock", "paper", "scissors"]; 
    return computerChoices[Math.floor(Math.random()* computerChoices.length)];}
    
    function combinedInputs(){
      return [userInput(), computerInput()];}
    
    let result =" Your choice vs machine: ";
    return (result + combinedInputs());}