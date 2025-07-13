const board = document.getElementById('bingo-board');
const drawButton = document.getElementById('draw-button');
const drawnNumber = document.getElementById('drawn-number');

let numbers = [];
for (let i = 1; i <= 75; i++) {
  numbers.push(i);
}

let bingoCells = [];

function createBoard() {
  let used = [];
  for (let i = 0; i < 25; i++) {
    const cell = document.createElement('div');
    let num;
    do {
      num = Math.floor(Math.random() * 75) + 1;
    } while (used.includes(num));
    used.push(num);
    cell.textContent = num;
    board.appendChild(cell);
    bingoCells.push(cell);
  }
}

drawButton.addEventListener('click', () => {
  if (numbers.length === 0) {
    drawnNumber.textContent = "もう数字はありません！";
    return;
  }
  const index = Math.floor(Math.random() * numbers.length);
  const number = numbers.splice(index, 1)[0];
  drawnNumber.textContent = `数字: ${number}`;

  bingoCells.forEach(cell => {
    if (parseInt(cell.textContent) === number) {
      cell.classList.add('marked');
    }
  });
});

createBoard();
