var intervals = [];

function req(uri) {
	var xhr = new XMLHttpRequest();
	onreadystatechange = function() {
		if (xhr.readyState == 4) {
			if (xhr.status == 200) {
				var data = xhr.responseText;
				if (data != "") {
					alert(data);
				}
			} else {
				// something is wrong
			}
		}
	}
	xhr.open("GET", uri, true);
	xhr.send();
}
function addObjectToServer(cls, x, y, id) {
	req("work/addobject.php?obj=" + cls + "&x=" + x + "&y=" + y + "&id=" + id);
}
function deleteFromServer(id) {
	req("work/deleteobject.php?id=" + id);
}
function getMapRange(start, end) {
	var xhr = new XMLHttpRequest();
	
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			if (xhr.status == 200) {
				var data = xhr.responseText;
				var objs = data.split("\n");
				
				for (var i = 0; i < objs.length; i++) {
					var s = objs[i].split("<");
					addObject(s[0], s[1], s[2], s[3]);
				}
			} else {
				// something went wrong. probably not a big deal
			}
		}
	}
	
	var uri = "work/getmap.php?start=" + start + "&end=" + end + "&" + ((Math.random() * 100000) + "_" + Math.random());
	
	xhr.open("GET", uri, true);
	xhr.send();
	
	var g = function() {
		if (scrollTop() >= start && scrollTop() <= end) {
			xhr.open("GET", uri, true);
			xhr.send();
		}
	}
	if (!intervals[start + "_" + end]) //prevent having two timers created for when a user scrolls back
		intervals[start + "_" + end] = setInterval(g, 2000);
}