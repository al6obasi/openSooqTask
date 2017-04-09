/* 
I used Middleware because  Middleware  allows me to define a stack of actions that I should flow through. Express servers themselves are a stack of middlewares.
*/
var morgan = require('morgan');
var bodyParser = require('body-parser')
module.exports = function (app, express) {
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + './../../dist'));
};
