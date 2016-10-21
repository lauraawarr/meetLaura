setInterval(pulseOn, 2600);

	var target = document.querySelector('#explore > .circle');

	//adds and removes class oninterval to fade circle in and out
	function pulseOn(){
		target.classList.add('oninterval');
		setTimeout(pulseOff, 1300);
	}; //end pulseOn
	function pulseOff(){
		target.classList.remove('oninterval');
}; //end pulseOff