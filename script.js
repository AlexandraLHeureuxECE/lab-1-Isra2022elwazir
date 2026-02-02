// Game state
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;
let gameStatus = '';

// DOM elements
const cells = document.querySelectorAll('.cell');
const statusDisplay = document.getElementById('status');
const restartBtn = document.getElementById('restartBtn');

// Winning combinations
const winningConditions = [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
    [0, 3, 6], // left column
    [1, 4, 7], // middle column
    [2, 5, 8], // right column
    [0, 4, 8], // diagonal top-left to bottom-right
    [2, 4, 6]  // diagonal top-right to bottom-left
];

// Initialize game
function initGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    gameStatus = '';
    
    cells.forEach((cell, index) => {
        cell.textContent = '';
        cell.classList.remove('x', 'o', 'winning');
        cell.disabled = false;
    });
    
    updateStatus();
}

// Update status display
function updateStatus() {
    if (gameStatus) {
        statusDisplay.textContent = gameStatus;
        if (gameStatus.includes('wins')) {
            statusDisplay.classList.add('winner');
        } else if (gameStatus.includes('Draw')) {
            statusDisplay.classList.add('draw');
        }
    } else {
        statusDisplay.textContent = `Player ${currentPlayer}'s turn`;
        statusDisplay.classList.remove('winner', 'draw');
    }
}

// Handle cell click
function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));
    
    // Check if cell is already filled or game is not active
    if (board[clickedCellIndex] !== '' || !gameActive) {
        return;
    }
    
    // Update board and UI
    board[clickedCellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;
    clickedCell.classList.add(currentPlayer.toLowerCase());
    clickedCell.disabled = true;
    
    // Check for win or draw
    checkResult();
}

// Check for win or draw
function checkResult() {
    let roundWon = false;
    let winningLine = null;
    
    // Check all winning conditions
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            roundWon = true;
            winningLine = winningConditions[i];
            break;
        }
    }
    
    if (roundWon) {
        gameStatus = `Player ${currentPlayer} wins!`;
        gameActive = false;
        
        // Highlight winning cells
        winningLine.forEach(index => {
            cells[index].classList.add('winning');
        });
        
        // Disable all cells
        cells.forEach(cell => cell.disabled = true);
    } else if (!board.includes('')) {
        // Check for draw
        gameStatus = "It's a draw!";
        gameActive = false;
    } else {
        // Switch player
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
    
    updateStatus();
}

// Keyboard support
function handleKeyPress(event) {
    // Number keys 1-9 for cells (1 = top-left, 9 = bottom-right)
    const keyMap = {
        '1': 0, '2': 1, '3': 2,
        '4': 3, '5': 4, '6': 5,
        '7': 6, '8': 7, '9': 8
    };
    
    const cellIndex = keyMap[event.key];
    
    if (cellIndex !== undefined && gameActive && board[cellIndex] === '') {
        // Simulate click on the cell
        cells[cellIndex].click();
    }
    
    // 'R' key to restart
    if (event.key.toLowerCase() === 'r') {
        restartBtn.click();
    }
}

// Event listeners
cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

restartBtn.addEventListener('click', initGame);

// Keyboard event listener
document.addEventListener('keydown', handleKeyPress);

// Initialize game on load
initGame();
