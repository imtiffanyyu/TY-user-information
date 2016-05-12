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
			else {
				matchingUser = request.body.name + ' not found';
			}
		}
		
		console.log (matchingUser);
		response.render ('results', { user: JSON.stringify(matchingUser) });
		
	});

});

// // ROUTE 3. not quite sure this works yet
// app.get ('/results', function (request, response) {
// 	response.render ('results');
// });

// ROUTE 4 + 5
app.get ('/addnew', function (request, response) {
	response.render ('addnew');
});

app.post ('/addnew', function (request, response) {
	console.log ( 'add request received' );
	console.log ( request.body );

	fs.readFile('./resources/users.json', function (error, data) {
		var newUser = request.body;
		if (error) {
			console.log (error);
		}

		var parsedData = JSON.parse(data);
		
		parsedData.push(newUser);
		console.log (parsedData);
		
		fs.writeFile ('./resources/users.json', JSON.stringify(parsedData, null, 4), function (error) {
			if (error) throw error;
		});
	});
	response.redirect ('/');
});


var server = app.listen(3000, function() {
	console.log('Example app listening on port: ' + server.address().port);
});



