$ ( document ).ready ( function ( ) {
	console.log ("DOM is ready")
	
	$('#name').keyup( function ( ) {
		var searchName = $ ( this ) .val ()
		var ajaxdata = {
			name: searchName
		}
		console.log (ajaxdata)


		if (ajaxdata.name) {
				$.post('/results', ajaxdata, function ( data ) {
					
					var empty = $('#results').empty();

					for (var person in data) {
						$ (empty).append('<li>'+ data[person].firstname + ' ' + data[person].lastname + ', ' + data[person].email)
					}
					console.log(data)
				})
		}
	})
})