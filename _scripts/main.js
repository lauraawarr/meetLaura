window.addEventListener('load', fadeLoading);

window.addEventListener('scroll', respondToScroll);

var positionElements = document.querySelectorAll('.main-section');
for( var i = 0; i < positionElements.length; i++ ) {
	positionElements[i].setAttribute( 'data-top', positionElements[i].offsetTop );
};

var links = document.querySelectorAll('a');
var hash, element, elementHeight, elementTop, elementBottom;

for (var i = 0; i < links.length; i++){
	links[i].addEventListener('click', function(ev){
		//checks if anchor is on current page and hash value is present
		if ((ev.target.pathname === window.location.pathname)&&(ev.target.hash != "")){ 
			//stops default behaviour
			ev.preventDefault();

			//store hash
			hash = ev.target.hash;
			console.log(hash)

			$('html, body').animate({
		        scrollTop: $(hash).offset().top
		      	}, 800, function(){
				//adds hash to browser location
					window.location.hash = hash;
				});
		}; //end else/if
	}); //end event listener
}; //end loop over links


function fadeLoading(){
	var loading = document.querySelector('#loading');
	loading.classList.add('fadeOut');
	setTimeout(function(){
		document.querySelector('body').removeChild(loading);
	},800);
};

function respondToScroll(){
	//defines total distance scrolled and height of document
	var windowHeight = window.innerHeight;
	var topScroll = window.pageYOffset;
	var bottomScroll = topScroll+windowHeight;
	var totalHeight = document.querySelector('body').offsetHeight;

	//var perScroll = topScroll/(totalHeight-windowHeight) * 100;

	//splits query selected list into parts and creates new array (in order to concat later)
	var bounceUp = Array.prototype.slice.call(document.querySelectorAll('.bounce-up'));
	var bounceLeft = Array.prototype.slice.call(document.querySelectorAll('.bounce-left'));
	var bounceRight = Array.prototype.slice.call(document.querySelectorAll('.bounce-right'));
	var rotate = Array.prototype.slice.call(document.querySelectorAll('.rotate'));

	//creates one array of all elements to be targeted
	var animateElements = bounceUp.concat(bounceLeft, bounceRight, rotate);

	//applies the class in-view to each element visible on the screen
	for (var i=0; i<animateElements.length; i++){
		element = animateElements[i];
		elementHeight = element.offsetHeight;
		elementTop = element.getBoundingClientRect().top; //relative to viewport
		elementBottom  = elementTop + elementHeight;

		//defines topInView as an element with its top position being greater than 
		//the top of the window and less than the bottom of the window (similar for bottomInView)
		var topInView = ((elementTop+topScroll >= topScroll) && (elementTop+topScroll <= bottomScroll));
		var bottomInView = ((elementBottom+topScroll >= topScroll) && (elementBottom+topScroll <= bottomScroll));

		//checks if top or bottom of element is in view
		//adds class in-view if visible, removes class if it is not
		if (topInView || bottomInView) {
			element.classList.add('in-view');
		// } else {
		// 	element.classList.remove('in-view');
		}
	}; //end for loop

	var content = document.querySelectorAll('.content');
	var nav = document.querySelector('#nav-bar');
	var navHeight = nav.offsetHeight;

	var n = window.scrollY;
	var m;

	for( var i = 0; i < content.length; i++ ) {
		var n = window.scrollY;
		m = content[i].parentElement.dataset.top;
		content[i].style.webkitTransform = "translate3d(0," + (n - m)+"px, 0)";
		content[i].style.MozTransform = "translate3d(0," + (n - m)+"px, 0)";
		content[i].style.OTransform = "translate3d(0," + (n - m)+"px)";
		content[i].style.msTransform = "translate3d(0." + (n - m)+"px)";
		content[i].style.transform = "translate3d(0," + (n - m)+"px, 0)";
	};

	if (topScroll < windowHeight){
		nav.classList.add('hidden');
		nav.classList.remove('in-view');
	} else {
		nav.classList.remove('hidden');
		nav.classList.add('in-view');
	};


	// var content = Array.prototype.slice.call(document.querySelectorAll('.content'));
	var mainSection = document.querySelectorAll('.main-section');
	for( var i = 0; i < mainSection.length; i++ ) {
		element = mainSection[i];
		elementHeight = element.offsetHeight;
		elementTop = element.getBoundingClientRect().top; //relative to viewport
		elementBottom  = elementTop + elementHeight;
		var midPoint = (elementTop + elementBottom)/2;

		//defines topInView as an element with its top position being greater than 
		//the top of the window and less than the bottom of the window (similar for bottomInView)
		var midInView = ((midPoint+topScroll >= topScroll) && (midPoint+topScroll <= bottomScroll));

		//checks if top or bottom of element is in view
		//adds class in-view if visible, removes class if it is not
		if (element.id != 'header'){
			if (midInView) {
				document.querySelectorAll('.nav-' + element.id)[0].style.color = '#87CEEB';
				document.querySelectorAll('.nav-' + element.id)[1].style.color = '#87CEEB';
				document.querySelectorAll('.nav-' + element.id)[0].style.borderBottom = '2px solid';
				document.querySelectorAll('.nav-' + element.id)[0].style.paddingBottom = '2px';
			} else {
				document.querySelectorAll('.nav-' + element.id)[0].style.color = '#000';
				document.querySelectorAll('.nav-' + element.id)[1].style.color = '#000';
				document.querySelectorAll('.nav-' + element.id)[0].style.borderBottom = '0px';
			};
		};
		
	}; //end for loop


}; // end respondToScroll


////// Scrolls through projects on click ///////

var projectArrows = document.querySelectorAll('.project-arrow');

for (var i=0; i < projectArrows.length; i++){
	projectArrows[i].addEventListener('click', scrollOnClick);
};

function scrollOnClick(ev){
	var dir;
	(ev.target == projectArrows[0]) ? dir = -1 : dir = 1;
};



