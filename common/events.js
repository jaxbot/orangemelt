function scrollTop() {
	var c = document.documentElement.scrollTop;
	if (c)
		return c;
	return document.body.scrollTop;
	
}

function handleNeedScrolling() {
	if (scrollTop() > document.documentElement.scrollHeight - (window.innerHeight) - 200) {
		loadToPage(curPage + 1);
	}
}
setInterval("handleNeedScrolling();", 50);


var mapTop = 0;

var f = function() {
	if (location.hash) {
		if (location.hash.indexOf("page") != -1) {
			loadToPage(parseInt(location.hash.replace("#page","")));
			setTimeout("document.body.scrollTop = 1000000000;", 100);
		}
	}
	
	mapTop = getElementXY(document.getElementById("map")).y;
}

function getElementXY(ele) {

	var ox = 0;
	var oy = 0;
	while (true) {
		ox += ele.offsetLeft;
		oy += ele.offsetTop;
		if (ele.offsetParent) {
			ele = ele.offsetParent;
		} else {
			break;
		}
	}
	return { x: ox, y: oy }
}

var curMousePos = [];

var mousemoved = function(e) {
	if (e == null)
		e = window.event;
	
	curMousePos = [e.clientX,e.clientY + scrollTop() - mapTop];
	
	var tracker = document.getElementById("cursortracker");
	tracker.style.left = curMousePos[0] + "px";
	tracker.style.top     = (curMousePos[1] - 20) + "px";
	
}

window.onload = f;
window.onhashchange = f;
window.onmousedown = function (e) {
	if (!e)
		e = window.event;
	if (e.button == 2) {
		resetPlacer();
	}
}
window.oncontextmenu = function () { return false; } // we want to handle right-click ourselves
