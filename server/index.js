const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRouter = require('./api');
const { DIST_FOLDER, SERVER_PORT } = require('../config/settings');
const PORT = SERVER_PORT;
const DIRECTORY = `../${DIST_FOLDER}`;

const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(cors());

server.use(express.static(__dirname + `/${DIRECTORY}`));
server.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, `${DIRECTORY}/index.html`));
});

server.use(apiRouter);

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
