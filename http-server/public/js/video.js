(function() {
// self invovked function 
	var video = document.getElementById('video'),
		// store url api here. 
		vendorUrl = window.URL || window.webkitURL;

		// namespace to get media
		navigator.getMedia = navigator.getUserMedia || 
							 navigator.webkitGetUserMedia ||
							 navigator.mozGetUserMedia || 
							 navigator.msGetUserMedia; 

		// Capture video. Method that gets media
	navigator.getMedia({
		video: true, 
		audio: false
		// successful 
	}, function(stream) {
		video.src = vendorUrl.createObjectURL(stream); // source to video element
		video.play(); 
	}, function(error) {
		// An error occured 
		// error code
	}); 
})();