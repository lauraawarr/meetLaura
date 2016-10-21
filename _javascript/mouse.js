window.addEventListener('load', init);

function init(){

	//remove loading gif and fade after page has loaded
	// document.querySelector('.loading').remove();

	window.addEventListener('mousemove', follow);

	function follow(ev){

	var x = ev.clientX;
	var y = ev.clientY;
	
	// //defines first section circles
	// var circle = document.querySelector('#first > .circle');
	// var line1 = document.querySelector('#first > .one');
	// var line2 = document.querySelector('#first > .two');
	// var line3 = document.querySelector('#first > .three');

	// //move circles with mouse
	// circle.style.right = 10 - x* 0.01 + '%';
	// line1.style.right = 10 - x* 0.005 + '%';
	// line2.style.right = 10 - x* 0.005 + '%';
	// line3.style.right = 10 - x* 0.0025 + '%';

	// var thirdCircle1 = document.querySelector('#third > .content > .one');
	// var thirdCircle2 = document.querySelector('#third > .content > .two');
	// var thirdCircle3 = document.querySelector('#third > .content > .three');
	// var thirdCircle4 = document.querySelector('#third > .content > .four');
	// var thirdCircle5 = document.querySelector('#third > .content > .five');
	// var thirdCircle6 = document.querySelector('#third > .content > .six');

	// //move circles with scroll
	// thirdCircle1.style.top =  y* 0.015 + '%';
	// thirdCircle2.style.top = 10 + y* 0.025 + '%';
	// thirdCircle3.style.top = 20 + y* 0.035 + '%';
	// thirdCircle4.style.top = 30 + y* 0.045 + '%';
	// thirdCircle5.style.top = 40 + y* 0.055 + '%';
	// thirdCircle6.style.top = 50 + y* 0.065 + '%';	

}; // end follow

}; //end init


