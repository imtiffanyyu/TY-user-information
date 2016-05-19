$ ( document ).ready ( function ( ) {
	console.log ("DOM is ready")
	
	var flag = true

	$('#name').keyup( function ( ) {
		var searchName = $ ( this ) .val ()
		var ajaxdata = {
			name: searchName,
			ajax: true
		}
		//console.log (ajaxdata)

		if(flag) {
			flag = false

			if (ajaxdata.name) {
					$.post('/results', ajaxdata, function ( data ) {
						
						var empty = $('#results').empty();

						for (var person in data) {
							$ (empty).append('<option>'+ data[person].firstname + ' ' + '<option>' + data[person].lastname)
						}
						console.log(data)
					})
			}

		}
		setTimeout (function () {
			flag = true
			console.log("made flag true")
		}, 300)
	})
})