var express = require ('express');
var bodyParser = require ('body-parser');
var fs = require ('fs');

var app = express();

app.use( express.static('./resources/'))

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

app.post ('/results', function (request, response) {
	console.log ( 'search request received' );
	console.log ( request.body );

	fs.readFile('./resources/users.json', function (error, data) {
		var matchingUser = [];
		var ajax = request.body.ajax;
		var userSearch = request.body.name;
		if (error) {
			res.send ("User not found.");
		}

		else {
			var parsedData = JSON.parse(data);
			for ( var i = 0; i < parsedData.length; i++ ) {
				var fullName = parsedData[i].firstname + " " + parsedData[i].lastname
				userSearch = userSearch.toUpperCase()
				if ( parsedData[i].firstname.toUpperCase().indexOf(userSearch) > -1 || fullName.toUpperCase().indexOf(userSearch) > -1 ) {
					matchingUser.push(parsedData[i]);
				}
			}
					
		}

		if (!ajax) {
			response.render ('results', {user: matchingUser});
		}
		else {
			response.send (matchingUser);
		}
			
	
	});

});


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

// PLAN
// 1. create a branch
// 2. connect search bar to ajax
// 3. create custom.js for ajax




