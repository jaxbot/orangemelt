var entropy = 0;

//Define a map. This was randomly generated a while back 
var globalM = [3,3,0,2,2,2,3,3,0,0,3,3,2,2,3,1,0,1,3,3,3,2,1,3,2,1,2,3,0,1,1,1,2,2,1,1,3,0,1,1,2,3,0,1,3,2,0,0,2,2,2,2,0,3,3,2,1,2,3,3,1,1,1,3,3,1,1,1,0,1,0,3,0,2,0,3,2,0,1,2,2,0,1,3,1,3,0,3,1,1,2,0,0,1,3,0,2,3,2,1,2,0,3,0,0,1,3,1,3,0,0,2,2,1,1,0,2,0,1,2,0,1,0,0,3,3,3,3,3,3,3,0,1,3,2,2,1,0,2,0,0,0,2,1,1,2,2,1,0,3,3,2,3,1,3,1,2,3,2,2,1,1,0,1,3,1,1,3,3,2,0,1,0,3,1,1,2,1,2,0,3,3,2,1,0,3,0,2,2,0,2,1,1,0,1,2,2,2,3,2,1,1,1,1,3,3,2,3,0,2,1,0,3,0,1,2,3,1,3,0,3,1,2,3,1,0,0,1,2,2,3,3,1,1,2,0,2,1,0,2,3,0,2,0,1,3,3,1,0,1,1,2,3,2,3,0,3,0,0,1,0,1,3,0,0,3,0,2,2,2,0,2,1,3,2,3,3,1,1,0,0,1,1,2,3,3,3,3,0,3,1,2,0,0,3,0,3,0,0,1,2,2,2,2,3,0,2,0,0,0,0,2,3,1,1,2,2,1,1,3,1,1,2,3,0,1,2,3,2,1,1,3,1,0,3,3,0,0,3,0,2,0,3,3,2,0,1,3,1,1,1,3,3,0,1,3,0,3,2,0,1,1,0,3,2,0,2,2,2,2,1,3,2,3,3,0,3,3,3,0,0,0,0,2,1,0,1,3,3,2,1,2,0,0,1,0,0,3,3,0,2,0,0,2,1,0,1,2,2,0,0,2,2,0,3,2,2,0,0,0,0,2,3,0,0,0,1,1,3,0,0,0,3,3,0,0,0,3,1,1,0,2,3,1,1,3,1,0,3,0,1,3,1,2,0,1,1,0,0,2,0,1,2,2,3,0,3,2,3,1,3,1,0,2,0,2,1,0,2,1,3,1,3,3,3,1,2,2,0,0,1,0,3,3,1,2,0,2,2,3,0,3,1,1,3,3,3,2,2,1,3,2,3,3,3,3,3,1,3,2,3,1,0,2,2,3,3,0,1,2,2,0,0,1,2,3,0,3,2,2,2,1,1,3,1,2,3,3,3,2,2,0,0,2,3,3,2,3,2,2,3,2,3,0,3,1,3,0,3,0,2,2,2,1,0,2,1,2,2,1,0,3,2,2,3,0,3,0,2,1,2,3,1,2,1,2,2,1,2,1,3,0,0,3,2,2,2,3,3,3,0,2,1,1,0,2,3,0,3,0,3,2,3,0,3,0,1,1,0,0,3,2,2,0,3,3,3,2,1,0,2,0,0,1,1,0,0,0,1,3,1,1,2,1,2,3,3,1,0,3,3,1,3,3,3,0,3,1,3,2,3,0,3,1,1,1,0,0,3,1,1,3,2,3,0,2,2,3,1,1,1,1,3,3,3,0,0,3,1,1,2,2,2,0,1,3,2,1,0,1,1,3,1,0,2,2,3,3,2,0,0,3,3,2,0,2,3,3,0,1,1,3,3,1,1,0,1,2,0,3,0,3,1,0,2,3,2,2,0,1,2,2,2,0,0,1,0,2,0,0,1,2,3,1,1,1,1,3,0,0,0,0,3,1,1,3,0,1,2,0,1,3,0,2,3,3,1,1,2,1,3,3,3,3,1,3,3,3,1,0,0,3,3,3,0,2,0,2,2,0,2,3,3,0,0,1,2,2,1,0,1,2,0,2,0,2,0,2,1,2,2,3,0,0,1,2,1,1,0,0,0,1,0,0,3,3,1,1,1,0,3,3,3,1,1,1,2,0,2,0,3,0,0,3,1,1,1,1,3,2,0,1,1,0,3,0,2,3,0,3,2,0,3,2,2,0,2,1,0,1,0,1,2,3,2,1,3,0,2,1,1,1,2,0,0,3,3,1,0,0,1,3,3,1,0,1,2,0,3,2,0,0,3,1,2,3,0,3,0,3,2,0,1,2,2,3,3,3,1,3,3,0,1,2,2,3,1,0,0,3,2,3,0,2,2,1,2,3,2,1,2,1,0,3,3,0,2,2,3,1,3,0,2,2,2,0,2,0,3,0,2,0,3,2,1,3,3,3,2,0,0,2,3,2,2,0,3,3,1,3,1];

var elementClasses = ["water", "grass", "dirt", "darkgrass"];
var curPage = 0;
var deleteMode = false;

var plants = ["tree1", "tree2", "tree3", "tree4", "tree5", "tree6", "berries"];
var buildings = ["chapel", "hut1", "hut2", "hut3", "pub", "house1", "house2", "windmill"];
var paths = ["path","path2","path3"];

var objectToPlace;

var curRange = 0;

function addMapElement(cls, width, height) {
	var map = document.getElementById("map");
	
	var tiles = document.createElement("div");
	tiles.className = "tile " + cls;
	tiles.style.width = width + "px";
	tiles.style.height = height + "px";
	
	map.appendChild(tiles);
	
	getMapRange(curRange, curRange + height);
	
	curRange += height;
}
function addMapTiles() {
	entropy++;
	if (entropy > globalM.length) entropy = 0;
	
	addMapElement(elementClasses[globalM[entropy]], 2000, 1200);
	
}
function loadToPage(p) {
	if (curPage > p) return;
	
	for (i=0;i<(p - curPage);i++)
	{
		addMapTiles();
	}
	curPage = p;
}

function mapElementFromY(y) {
	var tiles = document.getElementById("map").children;
	var top = 0;
	for (var i = 0; i < tiles.length; i++) {
		if (tiles[i].className.indexOf("tile") != -1) {
			top += parseInt(tiles[i].style.height.replace("px",""));

			if (y <= top) {
				return tiles[i];
			}
		}
	}
}
function addObject(cls, x, y, id) {
	if (document.getElementById(id) != null) return;
	if (typeof(id) == "undefined") id = Math.random();

	var map = document.getElementById("map");
	
	var obj = document.createElement("div");
	obj.className = cls;
	obj.style.top = y + "px";
	obj.style.left = x + "px";
	obj.style.position = "absolute";
	obj.id = id;
	obj.onmousedown = function(e) { handleClick(obj,e); }
	
	map.appendChild(obj);
}
function handleClick(obj,e) {
	var map = document.getElementById("map");
	
	if (!e)
		e = window.event;
		
	if (e.button == 2) {
		map.removeChild(obj);
		deleteFromServer(obj.id);
	}
}

function resetPlacer() {
	objectToPlace = null;
	var tracker = document.getElementById("cursortracker");
	tracker.style.display = "none";
}

function menuAddPlant() {
	var html = "<b>Plants</b><br>";
	html += listToHtml(plants);	
	showMenu(html);
}
function menuAddBuilding() {
	var html = "<b>Buildings</b><br>";
	html += listToHtml(buildings);	
	showMenu(html);
}
function menuAddPath() {
	var html = "<b>Paths</b><br>";
	html += listToHtml(paths);	
	showMenu(html);
}
function menuHide() {
	var menu = document.getElementById("menu");
	menu.style.display = "none";
	document.getElementById("menuHide").style.display = "none";
}
function listToHtml(arr) {
	var html = "";
	for (var i = 0; i < arr.length; i++)
	{
		html += "<div class='" + arr[i] + "' style='position:static;display:inline-block;cursor:pointer' onClick='placeObject(this);'></div>";
	}
	return html;
}
function showMenu(html) {
	var menu = document.getElementById("menu");
	menu.innerHTML = html;
	menu.style.display = "block";
	
	document.getElementById("menuHide").style.display = "inline-block";
	resetPlacer();
}
function placeObject(obj) {
	var tracker = document.getElementById("cursortracker");
	tracker.className = obj.className;
	tracker.style.display = "block";
	
	objectToPlace = obj;
}
function placeObjectClick() {
	var cls = objectToPlace.className;
	var x = curMousePos[0];
	var y = curMousePos[1] - 20;
	
	if (mapElementFromY(y).className.indexOf("water") != -1) 
		return false;
	
	var id = "obj" + Math.floor(Math.random() * 10000);
	addObject(cls, x, y, id);
	addObjectToServer(cls, x, y, id);
}
