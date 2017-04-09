/*  Back-end :
	I used Node Js , Express to helps me manage everything, from routes, to handling requests and views. 
*/
var express = require('express');
var app = express();
/* 
I used Middleware because  Middleware  allows me to define a stack of actions that I should flow through. Express servers themselves are a stack of middlewares.
*/
require('./server/config/middleware.js') (app,express); 
require('./server/config/routes.js') (app,express);

//=============================================================================
/*									Server   								 */
//=============================================================================

	var port = process.env.PORT || 4200;

	app.listen(port , function () {
		console.log('...Server now listening on port ' + port);
	});
module.exports = app;