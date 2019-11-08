window.onscroll = function() {
	var speed = 5.0;
	var target = document.getElementById("fade");
	var scrollTop = window.pageYOffset;
	var height = window.innerHeight;

	document.getElementById("fade").style.backgroundPosition = (-window.pageXOffset/speed)+"px "+(-window.pageYOffset/speed)+"px";
	target.style.opacity = (height - scrollTop) / height;

  }