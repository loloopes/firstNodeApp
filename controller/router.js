const express = require('express');
const artist = require('./artist/router');

const root = express.Router();

root.use('/artist', artist);

module.exports = root;