window.addEventListener('load', onLoad);

function onLoad(){
	$('html').animate({scrollTop:0}, 1);
    $('body').animate({scrollTop:0}, 1);

	var loading = document.querySelector('#loading');
	loading.classList.add('fadeOut');
	setTimeout(function(){
		document.querySelector('body').removeChild(loading);
	},800);
};

//// Google Analytics //////
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-89881513-1', 'auto');
ga('send', 'pageview');