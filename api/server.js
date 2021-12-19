const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes')
const server = express();

server.use(bodyParser.json())

server.use(router)

server.listen(3000, console.log('Server ON!'));
