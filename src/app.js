var express = require ('express');
var bodyParser = require ('body-parser');
var fs = require ('fs');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set ('views', './src/views');
app.set ('view engine', 'jade');

// PART 0
app.get ('/', function (request, response) {
	fs.readFile('./resources/users.json', function (error, data) {
		if (error) {
			console.log (error);
		}

		var parsedData = JSON.parse(data);
		console.log (parsedData);
		response.render ('index', {users: parsedData});
	});
});

// PART 1
app.get ('/form', function (request, response) {
	response.render ('form');
});

app.post ('/form', function (request, response) {
	console.log ( 'search request received' );
	console.log ( request.body );

	response.send ( 'data received: ' + JSON.stringify(request.body) + '\n')
});

var server = app.listen(3000, function() {
	console.log('Example app listening on port: ' + server.address().port);
});



