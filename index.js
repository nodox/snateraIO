var express 	   = require('express');
var app			   = express();

app.listen(port);      							  // startup our app at http://localhost:8080         

// shoutout to the user                     
console.log('Magic happens on port ' + port);


// expose app           
exports = module.exports = app;   