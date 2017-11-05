const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const router = require('./router/router.js');


const app = express();
const port = process.env.Port || 3000;

const restrict = function(req, res, next) {
  if (req.session.user || req.url === '/login' || req.url === '/signup') {
    next();
  } else {
    req.session.error = 'Access denied!';
    res.redirect('/login');
  }
};

app.get('*.js', (req, res, next) => {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.use(session({
  secret: 'puppies',
  resave: false,
  saveUninitialized: true
}));

app.use('/', restrict);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);
app.use(express.static(__dirname + '/../client/compiled'));


app.listen(port, () => console.log('now listening on port ' + port));
