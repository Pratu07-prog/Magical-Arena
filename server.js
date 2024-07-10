const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const gameRoutes = require('./src/routes/game');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './public')));
app.use('/api', gameRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
