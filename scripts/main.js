window.addEventListener('load', onLoad);

function onLoad(){

	$('html').animate({scrollTop:0}, 1);
    $('body').animate({scrollTop:0}, 1);

	var loading = document.querySelector('#loading');
	loading.classList.add('fadeOut');
	setTimeout(function(){
		document.querySelector('body').removeChild(loading);
	},800);

	var heightMatch = window.matchMedia("(min-height: 600px)").matches;
	if (heightMatch) {

		var strArray = [ 
			"making beautiful websites.", 
			"elegant code.", 
			"javascript.",
			"a good challenge."
			];
		var string = strArray[Math.floor(strArray.length*Math.random())];
		setTimeout(function(){
			type(string)
		}, 800);
	};
};

var heightMatch = window.matchMedia("(min-height: 600px)").matches;
if (heightMatch) {

	var writing = document.querySelector('#writing');
	writing.style.opacity = "1";
	writing.querySelector('.prefix').innerHTML = "I love ";

	var output = document.querySelector('#writing .output');
	output.innerHTML = "";

	function type(string){
		var i = 0;
		var interval = setInterval(function(){
			output.innerHTML += string[i];
			i++;
			if (i == string.length) clearInterval(interval);
		}, 100);
	};
} else {
	var subheader = document.querySelector('#subheader');
	subheader.style.opacity = "1";
}


//// Google Analytics //////
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-89881513-1', 'auto');
ga('send', 'pageview');