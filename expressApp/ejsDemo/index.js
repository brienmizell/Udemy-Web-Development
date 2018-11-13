var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.render('home.ejs');
	res.send('Welcome to the homepage');
});

app.get('/fallinlovewith/:thing', function(req, res) {
	var thing = req.params.thing;
	// res.send('You fell in love with ' + thing);
	res.render('love.ejs', { thingVar: thing });
});

app.get('/posts', function(req, res) {
	var posts = [
		{ title: 'Post 1', author: 'Suzy' },
		{ title: 'My adorable pet bunny.', author: 'Charlie' },
		{ title: 'Can you believe this pomsky?', author: 'Colt' }
	];
	res.render('posts.ejs', { posts: posts });
});

app.listen(3000, process.env.IP, function() {
	console.log('The server has started!');
});
