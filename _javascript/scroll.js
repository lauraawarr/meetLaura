window.addEventListener('load', init);

function init(){

	//remove loading gif and fade after page has loaded
	document.querySelector('.loading').remove();
	window.addEventListener('scroll', respondToScroll);

function respondToScroll(){
//defines total distance scrolled and height of document
var windowHeight = window.innerHeight;
var topScroll = window.pageYOffset;
var bottomScroll = topScroll+windowHeight;
var totalHeight = document.querySelector('body').offsetHeight;

var perScroll = topScroll/(totalHeight-windowHeight) * 100;

// //defines first section circles
var circle = document.querySelector('#first > .circle');
// var line1 = document.querySelector('#first > .one');
// var line2 = document.querySelector('#first > .two');
// var line3 = document.querySelector('#first > .three');
var bounceUp = Array.prototype.slice.call(document.querySelectorAll('.bounce-up'));
var bounceLeft = Array.prototype.slice.call(document.querySelectorAll('.bounce-left'));;

var elements = bounceUp.concat(bounceLeft);
// //move circles with scroll
// circle.style.top = -20 + perScroll* 1.65 + '%';
// line1.style.top = -30 + perScroll* 1.5 + '%';
// line2.style.top = -28 + perScroll* 1.45 + '%';
// line3.style.top = -20 + perScroll* 1.4 + '%';

for (var i=0; i<elements.length; i++){
	var element = elements[i];
	var elementHeight = element.offsetHeight;
	var elementTop = element.getBoundingClientRect().top;
	var elementBottom  = elementTop + elementHeight;

	if ((elementTop >= topScroll) && (elementTop <= bottomScroll)) {
		element.classList.remove('in-view');
	} else {
		element.classList.add('in-view');
	}
}; //end for loop

var thirdCircle1 = document.querySelector('#third > .content > .one');
var thirdCircle2 = document.querySelector('#third > .content > .two');
var thirdCircle3 = document.querySelector('#third > .content > .three');
var thirdCircle4 = document.querySelector('#third > .content > .four');
var thirdCircle5 = document.querySelector('#third > .content > .five');
var thirdCircle6 = document.querySelector('#third > .content > .six');


//move circles with scroll
thirdCircle1.style.left =  perScroll* 0.8 + '%';
thirdCircle2.style.left = 100 - perScroll*0.8 + '%';
thirdCircle3.style.left =  perScroll* 0.7 + '%';
thirdCircle4.style.left = 100 - perScroll*0.9 + '%';
thirdCircle5.style.left =  perScroll* 0.7 + '%';
thirdCircle6.style.left = 100 - perScroll*0.8 + '%';


var fifthCircle1 = document.querySelector('#fifth > .content > .one');
var fifthCircle2 = document.querySelector('#fifth > .content > .two');

fifthCircle1.style.left =  100 - perScroll* 0.8 + '%';
fifthCircle2.style.left = 100 - perScroll*0.6 + '%';


}; // end respondToScroll

};



