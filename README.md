# Magical Arena

Magical Arena is a turn-based combat game where players battle using their attributes of health, strength, and attack. The game allows two players to engage in combat until one player's health reaches zero.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Game Logic](#game-logic)
4. [Testing](#testing)

## Installation

To install and run Magical Arena locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/Magical-Arena.git
   cd Magical-Arena
   ```

2. **Install dependencies:**

   Ensure Node.js and npm are installed on your machine. Then, install dependencies:

   ```bash
   npm install
   ```

## Usage

To start the game, run the following command:

```bash
npm start
```

This will start the game in your terminal or console.

### Frontend Interface (Optional)

If you want to use a frontend interface to interact with the game (such as entering player attributes), follow these steps:

1. **Start the frontend server:**

   ```bash
   npm run frontend
   ```

2. **Access the frontend:**

   Open your web browser and go to `http://localhost:3000` to access the frontend interface.

## Game Logic

The core logic of Magical Arena is implemented in Node.js on the backend and optionally in a frontend interface for user interaction.

### Backend Logic

- **Entry Point:** The main entry point of the backend is `src/server.js`.
- **Game Logic:** The game logic is implemented in `src/game.js`.
  - The `fight()` function handles the turn-based combat between two players.
  - Players attack in turns based on their health, with the player having lower health attacking first.
  - Attack and defense outcomes are determined by dice rolls.
  - The game continues until one player's health reaches zero, at which point the other player is declared the winner.
- **Player Model:** The attributes and behaviors of each player are defined in `src/models/player.js`.
  - This includes attributes such as health, strength, and attack, along with methods for taking damage and checking if the player is alive.

### Frontend Flow

When a user hits "Start" in the frontend interface:

1. **User Interaction:** The user enters player attributes (health, strength, attack) and clicks "Start".
2. **Frontend Request:** The frontend sends a request to the backend server to initiate the game.
3. **Backend Processing:**
   - The backend server receives the request and starts the game logic.
   - Players' attributes are passed into the game logic, initiating combat between the two players.
4. **Game Execution:** 
   - The game progresses as players attack in turns based on their health.
   - Dice rolls determine attack and defense outcomes.
   - The game continues until one player's health reaches zero.
5. **Result Display:** 
   - Once the game ends, the frontend receives the result from the backend.
   - The frontend interface displays the winner and any relevant game statistics.

## Testing

The project uses Jest for testing. To run tests, use the following command:

```bash
npm test
```

This will execute all the test cases and ensure the game logic functions correctly.
