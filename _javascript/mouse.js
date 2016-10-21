window.addEventListener('load', init);

function init(){

	setTimeout(smoothLoad, 3000);
	//fades out loading elements and fades in header after page has loaded
	function smoothLoad(){
		document.querySelector('.loading').classList.add('fade');
	}; //end smoothLoad


	window.addEventListener('mousemove', follow);

	function follow(ev){

		var x = ev.clientX;
		var y = ev.clientY;

		//defines experience circles to trigger details on hover
		var exp1 = document.querySelector('#third > .content > .one > .work > .circle');
		var exp2 = document.querySelector('#third > .content > .two > .work > .circle');
		var exp3 = document.querySelector('#third > .content > .three > .work > .circle');
		var exp4 = document.querySelector('#third > .content > .four > .work > .circle');
		var exp5 = document.querySelector('#third > .content > .five >.work > .circle');
		var experience = [exp1, exp2, exp3, exp4, exp5];

		//defines detail circles to appear on hover
		var det1 = document.querySelector('#third > .content > .one');
		var det2 = document.querySelector('#third > .content > .two');
		var det3 = document.querySelector('#third > .content > .three');
		var det4 = document.querySelector('#third > .content > .four');
		var det5 = document.querySelector('#third > .content > .five');
		var details = [det1, det2, det3, det4, det5];

		var detailCircle, glowText;

		//expands circle on hover to display details about each work element and adds shadow to text
		function displayDetails(t){
			t.style.zIndex = "1";
			detailCircle = t.querySelector('.details');
		 	detailCircle.classList.add('onhover');
		 	glowText = t.querySelector('.work > .title');
		 	glowText.style.textShadow = "2px 2px #87CEEB";

		 	};
		//hides circle with work details when not hovering and removes shadow from text
		function hideDetails(t){
			t.style.zIndex = null;
		 	detailCircle = t.querySelector('.details');
		 	detailCircle.classList.remove('onhover');
		 	glowText = t.querySelector('.work > .title');
		 	glowText.style.textShadow = "0px 0px #87CEEB";
		 	};
		
		exp1.addEventListener('mouseenter', function(){displayDetails(det1);});
		exp1.addEventListener('mouseleave', function(){hideDetails(det1);});

		exp2.addEventListener('mouseenter', function(){displayDetails(det2);});
		exp2.addEventListener('mouseleave', function(){hideDetails(det2);});

		exp3.addEventListener('mouseenter', function(){displayDetails(det3);});
		exp3.addEventListener('mouseleave', function(){hideDetails(det3);});

		exp4.addEventListener('mouseenter', function(){displayDetails(det4);});
		exp4.addEventListener('mouseleave', function(){hideDetails(det4);});

		exp5.addEventListener('mouseenter', function(){displayDetails(det5);});
		exp5.addEventListener('mouseleave', function(){hideDetails(det5);});
	
	
	}; // end follow

}; //end init


