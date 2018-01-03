/*
   ======= File Map =======
   - menu section
      |-> Define variables
*/

// when document ready start our function
document.addEventListener("DOMContentLoaded", function(){

	imageGallery('.container .gallary-item');
   

}); // DOMContentLoaded

var imageGallery = function(gallerySelector){
	// select images gallary
	// var images = document.querySelectorAll('.container .gallary-item');
	var images = document.querySelectorAll(gallerySelector);

	// create overlay
	var overlay = document.createElement('span');
	overlay.className = 'overlay';
	document.querySelector('.container').appendChild(overlay);

	// loop through images gallary
	images.forEach(function (image) {
		image.addEventListener('mouseenter', function () {

			var bounds = this.getBoundingClientRect();
			var cords = { // to make the scroll not affect the position
				top: bounds.top + window.scrollY,
				left: bounds.left + window.scrollX,
				width: bounds.width,
				height: bounds.height
			};
			// style the overlay to match the images
			overlay.style.width = cords.width + 'px';
			overlay.style.height = cords.height + 'px';
			overlay.style.transform = 'translate(' + cords.left + 'px, ' + cords.top + 'px)';
		}); // addEventListener
	}); // forEach
}
