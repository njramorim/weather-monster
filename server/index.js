const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRouter = require('./api');
const { DIST_FOLDER, SERVER_PORT } = require('../config/settings');
const PORT = SERVER_PORT;
const DIRECTORY = `${__dirname}/../${DIST_FOLDER}`;

const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(cors());
server.use(express.static(DIRECTORY, { index: false }));

server.get('/', (req, res) => {
  res.sendFile('index.html', { root: `./${DIST_FOLDER}/` });
});

server.use(apiRouter);

server.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
