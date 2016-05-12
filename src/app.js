var express = require ('express');
var bodyParser = require ('body-parser');
var fs = require ('fs');

var app = express();


app.use(bodyParser.urlencoded({ extended: true }));

app.set ('views', './src/views');
app.set ('view engine', 'jade');

// ROUTE 1
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

// ROUTE 2
app.get ('/form', function (request, response) {
	response.render ('form');
});

app.post ('/form', function (request, response) {
	console.log ( 'search request received' );
	console.log ( request.body );

	fs.readFile('./resources/users.json', function (error, data) {
		var matchingUser = [];
		if (error) {
			console.log (error);
		}

		var parsedData = JSON.parse(data);
		
		for ( var i = 0; i < parsedData.length; i++ ) {
			if ( request.body.name == parsedData[i].firstname || request.body.name == parsedData[i].lastname ) {
				matchingUser.push(parsedData[i]);
			}
		}
		
		console.log (matchingUser);
		response.render ('results', { user: JSON.stringify(matchingUser) });
		
	});
	
});

// ROUTE 3. not quite sure this works yet
app.get ('/results', function (request, response) {
	response.render ('results');
});


var server = app.listen(3000, function() {
	console.log('Example app listening on port: ' + server.address().port);
});



