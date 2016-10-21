window.addEventListener('scroll', respondToScroll);

function respondToScroll(){
	//defines total distance scrolled and height of document
	var windowHeight = window.innerHeight;
	var topScroll = window.pageYOffset;
	var bottomScroll = topScroll+windowHeight;
	var totalHeight = document.querySelector('body').offsetHeight;

	// var perScroll = topScroll/(totalHeight-windowHeight) * 100;

	//splits query selected list into parts and creates new array (in order to concat later)
	var bounceUp = Array.prototype.slice.call(document.querySelectorAll('.bounce-up'));
	var bounceLeft = Array.prototype.slice.call(document.querySelectorAll('.bounce-left'));
	var bounceRight = Array.prototype.slice.call(document.querySelectorAll('.bounce-right'));

	//creates one array of all elements to be targeted
	var elements = bounceUp.concat(bounceLeft, bounceRight);

	//applies the class in-view to each element visible on the screen
	for (var i=0; i<elements.length; i++){
		var element = elements[i];
		var elementHeight = element.offsetHeight;
		var elementTop = element.getBoundingClientRect().top; //relative to viewport
		var elementBottom  = elementTop + elementHeight;

		//defines topInView as an element with its top position being greater than 
		//the top of the window and less than the bottom of the window (similar for bottomInView)
		var topInView = ((elementTop+topScroll >= topScroll) && (elementTop+topScroll <= bottomScroll));
		var bottomInView = ((elementBottom+topScroll >= topScroll) && (elementBottom+topScroll <= bottomScroll));

		//checks if top or bottom of element is in view
		//adds class in-view if visible, removes class if it is not
		if (topInView || bottomInView) {
			element.classList.add('in-view');
		} else {
			element.classList.remove('in-view');
		}
	}; //end for loop

}; // end respondToScroll



