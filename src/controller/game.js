const Player = require('../models/player');
const startGame = require('../game');

const Game = async (req, res) => {
  const { playerA, playerB } = req.body;
  const playerAInstance = new Player(playerA.name, playerA.health, playerA.strength, playerA.attack);
  const playerBInstance = new Player(playerB.name, playerB.health, playerB.strength, playerB.attack);

  const result = await startGame(playerAInstance, playerBInstance);

  res.json({ result });
};

module.exports = Game;
