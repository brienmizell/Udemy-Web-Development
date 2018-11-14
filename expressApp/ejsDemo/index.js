var express = require('express');
var app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('home');
	res.send('Welcome to the homepage');
});

app.get('/fallinlovewith/:thing', function(req, res) {
	var thing = req.params.thing;
	// res.send('You fell in love with ' + thing);
	res.render('love', { thingVar: thing });
});

app.get('/posts', function(req, res) {
	var posts = [
		{ title: 'Post 1', author: 'Suzy' },
		{ title: 'My adorable pet bunny.', author: 'Charlie' },
		{ title: 'Can you believe this pomsky?', author: 'Colt' }
	];
	res.render('posts', { posts: posts });
});

app.listen(3000, function() {
	console.log('The server has started!');
});
