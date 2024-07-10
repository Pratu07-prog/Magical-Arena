const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Player = require('./models/player');
const startGame = require('./game');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
