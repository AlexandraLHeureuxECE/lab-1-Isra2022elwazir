[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/BCrizr4d)

# Tic-Tac-Toe Game

A simple, web-based Tic-Tac-Toe game for two players on the same device.

## Features

- **3×3 Grid**: Interactive game board with visual feedback
- **Turn-based Gameplay**: Players take turns (X and O)
- **Win Detection**: Automatically detects wins and draws
- **Restart Functionality**: Start a new game without refreshing the page
- **Keyboard Support**: Play using number keys 1-9 (1 = top-left, 9 = bottom-right) and press 'R' to restart
- **Visual Feedback**: 
  - Hover effects on cells
  - Winning cells are highlighted
  - Clear status messages showing whose turn it is
  - Color-coded players (X = red, O = blue)

## Running Locally

1. Clone this repository:
   ```bash
   git clone <your-repo-url>
   cd lab-1-Isra2022elwazir
   ```

2. Open `index.html` in your web browser:
   - Double-click the file, or
   - Use a local server (recommended):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     ```
   - Then navigate to `http://localhost:8000` in your browser

## GitHub Pages Deployment

**GitHub Pages URL**: [Your GitHub Pages URL will appear here after deployment]

To deploy:
1. Go to your repository settings on GitHub
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select the branch (usually `main` or `master`)
4. Select the folder (usually `/root`)
5. Click "Save"
6. Your site will be available at: `https://[username].github.io/[repository-name]`

## LLM Tool Disclosure

**LLM Tool(s) Used**: Cursor (Auto - agentic AI coding assistant)

This project was developed using LLM-assisted coding through Cursor's AI assistant. The implementation was created through iterative interactions with the LLM, following a vibe coding approach where the application evolved through natural conversation and refinement.

## Game Instructions

- Click on any empty cell to make your move
- Players alternate turns (X goes first)
- The game ends when:
  - A player gets three in a row (horizontally, vertically, or diagonally)
  - The board is full with no winner (draw)
- Click "Restart Game" or press 'R' to start a new game
- Use number keys 1-9 to play without a mouse
