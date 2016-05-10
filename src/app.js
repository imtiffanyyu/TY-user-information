var express = require ('express');
var fs = require ('fs');

var app = express();

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

var server = app.listen(3000, function() {
	console.log('Example app listening on port: ' + server.address().port);
});