const X_IMAGE_URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/x.png';
const O_IMAGE_URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/circle.png';

let playerWins = 0;
let botWins = 0;

function changeToX(event) {
  const container = event.currentTarget;
  const image = document.createElement('img');
  image.src = X_IMAGE_URL;
  container.appendChild(image);
  container.removeEventListener('click', changeToX);

  if (checkWin(X_IMAGE_URL)) {
    playerWins++;
    updateScore();
    setTimeout(() => alert('You Win!'), 100);
    return; 
  }

  setTimeout(botPlay, 300);
}




function botPlay() {
  const boxes = document.querySelectorAll('#grid div');
  const emptyBoxes = Array.from(boxes).filter(box => box.children.length === 0);

  if (emptyBoxes.length === 0) return;

  const randomBox = emptyBoxes[Math.floor(Math.random() * emptyBoxes.length)];
  const image = document.createElement('img');
  image.src = O_IMAGE_URL;
  randomBox.appendChild(image);
  randomBox.removeEventListener('click', changeToX);

  if (checkWin('O_IMAGE_URL')) {
    botWins++;
    updateScore();
    setTimeout(() => alert('Bot Wins!'), 100);
  }
}

function checkWin(player) {
  const boxes = document.querySelectorAll('#grid div');
  const board = Array.from(boxes).map(box => box.children.length ? box.children[0].src : null);

  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]             
  ];

  return winPatterns.some(pattern =>
    pattern.every(index => board[index] && board[index].includes(player.includes('x.png') ? 'x.png' : 'circle.png'))
  );
}



function updateScore() {
  document.getElementById('player-score').textContent = `Player: ${playerWins}`;
  document.getElementById('bot-score').textContent = `Bot: ${botWins}`;
}

function restartGame() {
  const boxes = document.querySelectorAll('#grid div');
  boxes.forEach(box => {
    box.innerHTML = '';
    box.addEventListener('click', changeToX);
  });
}

const boxes = document.querySelectorAll('#grid div');
for (const box of boxes) {
  box.addEventListener('click', changeToX);
}

document.getElementById('restart-button').addEventListener('click', restartGame);
