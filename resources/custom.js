$ ( document ).ready ( function ( ) {
	console.log ("DOM is ready")
	
	$('#name').keyup( function ( ) {
		var searchName = $ ( this ) .val ()
		var ajaxdata = {
			name: searchName,
			ajax: true
		}
		console.log (ajaxdata)


// //
// // Throttle calls to "callback" routine and ensure that it
// // is not invoked any more often than "delay" milliseconds.
// //
// function throttle(delay, callback) {
//     var previousCall = new Date().getTime();
//     return function() {
//         var time = new Date().getTime();

//         //
//         // if "delay" milliseconds have expired since
//         // the previous call then propagate this call to
//         // "callback"
//         //
//         if ((time - previousCall) >= delay) {
//             previousCall = time;
//             callback.apply(null, arguments);
//         }
//     };
// }


		// $(window).scroll(throttle(30, function() {
			if (ajaxdata.name) {
					$.post('/results', ajaxdata, function ( data ) {
						
						var empty = $('#results').empty();

						for (var person in data) {
							$ (empty).append('<option>'+ data[person].firstname + ' ' + '<option>' + data[person].lastname)
						}
						console.log(data)
					})
			}
		// }));

	})
})