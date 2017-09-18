const express = require('express');
const bodyParser = require('body-parser');
// const router = require('./router/router.js');

const app = express();
const port = process.env.Port || 3000;

// app.use('/', router);
app.use('/', bodyParser.json());
app.use(express.static(__dirname + '/../client/compiled'));


app.listen(port, () => console.log('now listening on port ' + port));