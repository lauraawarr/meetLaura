// changes page based on width
var mq = window.matchMedia( "(min-width: 621px)" );
var mq2 = window.matchMedia( "(min-width: 715px)" );

//event handler
if (matchMedia){
	mq.addListener(WidthChange);
	WidthChange(mq);
	mq2.addListener(WidthChange2);
	WidthChange(mq2);
}; // end if

//media query change
function WidthChange(m){
	if (m.matches){
		//window >= 621 px
		document.querySelector('#footer .fade').style.height="200px"
	} else {
		//window < 621px
		document.querySelector('#footer .fade').style.height="250px"
	};
};

function WidthChange2(m){
	if (m.matches){
		//window >= 621 px
		document.querySelector('#first .content').style.flexDirection= "row";
		document.querySelector('#first .profile').style.height="100%";
		document.querySelector('#first').style.height="600px";
	} else {
		//window < 715 px
		document.querySelector('#first .content').style.flexDirection= "column";
		document.querySelector('#first .profile').style.height="400px";
		document.querySelector('#first').style.height="900px";
	};
};