document.addEventListener('DOMContentLoaded', () =>{
    const choices = document.querySelector('.choice');
    const player1ScoreElement = document.getElementById('.player1-score');
    const player2ScoreElement = document.getElementById('.player2-score');
    const messageElement = document.getElementById('message');
    const resetButton = document.getElementById('reset');

    let player1Score = 0 ;
    let player2Score = 0 ;

    choices.forEach(choice =>{
const player1Choice = choice.getAttribute('data-choice');
const player2Choice = getComputerChoice();
const winner = determineWinner(player1Choice, player2Choice);

updateScore(winner);
displayResult(player1Choice, player2Choice, winner);
    });
});

resetButton.addEventListener('click', resetGame);

function getComputerChoice(){
const choices = ['rock', 'paper' ,'scissors'];
const randomIndex = Math.floor(Math.random() * choices.lenght);
return choices[randomIndex] ;
}

function determineWinner(choice1, choice2){
if(choice1 === choice2){
return'draw';
} else if (
(choice1 === 'rock' && choice2 === 'scissors') ||
(choice1 === 'paper' && choice2 === 'rock')  ||
(choice1 === 'scissors' && choice2 === 'paper')
){
return 'player1';
}else {
    return 'player2';
}
}

function updateScore(winner){
if (winner === 'player1'){
player1Score++;
player1ScoreElement.textContent = player1Score ;
} else if (winner === 'player2'){
    player2Score++;
    player2ScoreElement.textContent = player2Score ;
}
}

function displayResult(choice1, choice2, winner){
if (winner === 'draw'){
messageElement.textContent = `It's a draw! Choose ${choice1}.`;
} else {
messageElement.textContent = `Player 1 choose ${choice1} , Player 2 choose $(choice2) . ${winner.charAt(0).toUpperCase() + winner.slice(1)} wins!`;
}
}

function resetGame(){
player1Score = 0;
player2Score = 0;
player1ScoreElement.textContent = player1Score;
player2ScoreElement.textContent = player2Score;
messageElement.textContent = 'Choose your move!'
} ;

