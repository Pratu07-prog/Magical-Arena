const express = require('express');
const startGame = require('../controller/game');

const router = express.Router();

router.post('/start-game', startGame);

module.exports = router;
