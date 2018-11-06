let express = require('express');
let app = express();
var request = require('request');

app.get('/results', function(req, res) {
	res.send('hello, it works.');
});

app.listenm(process.env.PORT, process.env.IP, function() {
	console.log('Movie App has started!!!');
});
