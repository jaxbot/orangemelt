//home.js
//Used by the external pages (simple UI stuff)

var skyColor = "#64a7eb";

//Lifesaver
function _g(id) {
	return document.getElementById(id);
}
//Elements
function fadeInElement(ele, step, speed) {
	step = typeof(step) != 'undefined' ? step : 1;
	speed = typeof(speed) != 'undefined' ? speed : 5;
	for (i=0;i<100;i=i+step) {
		setTimeout("_g('"+ele.id+"').style.opacity = " + (i / 100) + ";", i * speed);
	}
}

var cloudarray = new Array();
function addCloud(left, dir) {
	var sky = _g("sky");
	var cloud = document.createElement('div'); 
	cloud.className = "cloud";
	cloud.id = "cloud_" + Math.round((Math.random() * 10000));
	cloud.style.left = left + "px";
	cloud.style.backgroundSize = 60 + (Math.random() * 90) + "px";
	cloud.setAttribute("data-direction", dir);

	sky.appendChild(cloud);
	
	cloudarray.push(cloud.id);
}

var planearray = new Array();
function addPlane(caption) {
	var sky = _g("sky");
	var plane = document.createElement('div'); 
	plane.className = "plane";
	plane.id = "plane_" + Math.round((Math.random() * 10000));
	plane.style.left = "2500px";
	plane.style.width = (28 * caption.length) + "px";
	plane.innerHTML = "<img src='img/plane.png' style='float:left'><div class='banner'>"+caption+"</div>";
	sky.appendChild(plane);
	
	planearray.push(plane.id);
	var x = 2000;
	for (i = 0; i < 2500; i++) {
		setTimeout("_g('"+plane.id+"').style.left="+x+" + 'px';", i * 7);
		x--;
	}

}

function animate() {
	for (i = 0; i < cloudarray.length; i++) {
		var cloud = _g(cloudarray[i]);
		var left = parseFloat(cloud.style.left.replace("px", ""));
		
		left += parseFloat(cloud.getAttribute("data-direction"));
		
		if (left > 2000)
		left = -200;
		if (left < -200)
		left = 2000;
		cloud.style.left = left + "px";
	}
}
setInterval("animate();",50);

function renderSky() {
	addCloud(-100, 1);
	addCloud(200, 2);
	addCloud(600, 1);
	addCloud(800, -2);
	addCloud(900, 1);

	
	for (var i = 0; i < Math.random() * 2; i++) {
		addCloud(Math.random() * 2000, 1);
		addCloud(Math.random() * 2000, -2);
		addCloud(Math.random() * 2000, 1);
	}
	
	setSkyColor(skyColor);
	
}

function setSkyColor(skyColor) {
	var sky = _g("sky");
	
	sky.style.backgroundColor = skyColor;
	
	var prefixes = ["","-webkit-","-o-","-moz-","-ms-"];
	for (n in prefixes) {
		sky.style.backgroundImage = prefixes[n] + "linear-gradient(rgba(255,255,255,0.7) 0%, "+skyColor+" 100%)";
	}
	
	
	fadeInElement(sky);
}