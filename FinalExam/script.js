const Rbtn = document.getElementById('rock');
const Pbtn = document.getElementById('paper');
const Sbtn = document.getElementById('scissors');
const playerChoiceImg = document.getElementById('player-choice');
const computerChoiceImg = document.getElementById('computer-choice');

Rbtn.addEventListener('click', () => playGame('rock'));
Pbtn.addEventListener('click', () => playGame('paper'));
Sbtn.addEventListener('click', () => playGame('scissors'));

function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    playerChoiceImg.src = `${playerChoice}.png`;
    computerChoiceImg.src = `${computerChoice}.png`;

    let result = '';
    if (playerChoice === computerChoice) {
        result = '平手！';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) 
    {
        result = '你贏了！';
    } 
    else {
        result = '電腦贏了！';
    }
 
    document.getElementById('result').textContent = `你選擇了 ${playerChoice}.png，電腦選擇了 ${computerChoice}.png。<br/>${result}`;
}
