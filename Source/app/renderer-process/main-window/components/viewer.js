/* ----------------------------------------------------------
* Viewer Component
* ----------------------------------------------------------*/

const { ipcRenderer, remote } = require("electron")
const path = "./app/renderer-process/main-window/"




var canvas; //Will be linked to the canvas in our index.html page
var stage; //
var touch1, touch2;
var is_update_stage = false;

var img = "https://www.w3schools.com/css/img_fjords.jpg";
var index = 0;
var img_list = [
	"http://createjs.com/docs/easeljs/assets/docs-icon-EaselJS.png",
	"https://cdn.glitch.com/ace687ad-01fb-468f-ba6b-a67283811a0c%2Fcar.svg?1504800679560",
	"http://www.gravatar.com/avatar/4ff020826d61a6cfd875cb5cc29e5ce6/?default=&s=80",	
	"https://www.w3schools.com/css/img_fjords.jpg"
]
// var btnNext, btnBack;


var is_panning = false;
var is_touch_support = false;
const SCALE_FACTOR = 1.1;



function init() {
	stage = new createjs.Stage("picMain");
	canvas = document.getElementById("picMain");

	Resize();

	// enable touch interactions if supported on the current device:
	is_touch_support = createjs.Touch.isSupported();
	if (is_touch_support) {
		createjs.Touch.enable(stage);
	}
	debug("Is touch supported: " + is_touch_support);
	

	stage.enableDOMEvents = true;
	// enabled mouse over / out events
	stage.enableMouseOver(10);
	stage.mouseMoveOutside = true; // keep tracking the mouse even when it leaves the canvas


	stage.addEventListener("stagemousedown", stage_MouseDown);
	stage.addEventListener("stagemousemove", stage_MouseMove);
	stage.addEventListener("stagemouseup", stage_MouseUp);

	if (is_touch_support) {
		stage.addEventListener("pressup", stage_PressUp);
		stage.addEventListener("pressmove", stage_PressMove);
	}

	// pic = new createjs.Bitmap(img);
	

	LoadImage(index);
	

	canvas.addEventListener("mousewheel", stage_MouseWheel, false);
	canvas.addEventListener("DOMMouseScroll", stage_MouseWheel, false);

	createjs.Ticker.timingMode = createjs.Ticker.RAF;
	createjs.Ticker.addEventListener("tick", tick);

	// btnNext = document.getElementById("btnNext");
	// btnNext.addEventListener("click", function(e) {
	// 	LoadImage(1);
	// }, false);

	// btnBack = document.getElementById("btnBack");
	// btnBack.addEventListener("click", function(e) {
	// 	LoadImage(-1);
	// }, false);
}


function LoadImage(step) {

	index += step;
	if (index >= img_list.length) index = 0;
	if (index < 0) index = img_list.length - 1;
	console.log(index)

	let pic = new createjs.Bitmap(img_list[index]);

	pic.image.onload = function() {

		let graphics = new createjs.Graphics().beginFill("red").drawRect(0, 0, pic.image.width, pic.image.height);
		pic.hitArea = new createjs.Shape(graphics);

		pic.x = canvas.width / 2 - pic.image.width / 2;
		pic.y = canvas.height / 2 - pic.image.height / 2;

		// tell timer to redraw the stage
		is_update_stage = true;
	}
	
	stage.removeAllChildren();
	stage.addChild(pic);
}


ipcRenderer.on("mainWindow_resize", function (e, arg) {
	//console.log("================")	
	Resize()
})

function Resize(forceUpdateStage = true) {
	let $viewer = $("#viewer")

	//console.log($viewer.outerWidth() + "__" + $viewer.outerHeight())

	// update canvas size
	canvas.width = $viewer.outerWidth();
	canvas.height = $viewer.outerHeight();

	if (forceUpdateStage) {
		// tell timer to redraw the stage
		is_update_stage = true;
	}
}


function Zoom(delta, position = null) {

	let factor = Math.pow(SCALE_FACTOR, delta);
	// console.log(delta);

	if (position === null) {
		position = stage.globalToLocal(stage.mouseX, stage.mouseY);
	}

	stage.regX = position.x;
	stage.regY = position.y;
	stage.x = stage.mouseX;
	stage.y = stage.mouseY;	
	stage.scaleX = stage.scaleY *= factor;

	debug("Zoom: " + stage.getTransformedBounds().width / stage.getBounds().width);

	// tell timer to redraw the stage
	is_update_stage = true;
}


function stage_MouseWheel(e) {
	let delta = e.wheelDelta ? e.wheelDelta/40 : e.detail ? -e.detail : 0;
	Zoom(delta);
}

function stage_MouseMove(e) {
	if (is_panning) {
		let newX = e.stageX + stage.offset.x;
		let newY = e.stageY + stage.offset.y;

		stage.x = newX;
		stage.y = newY;

		// tell timer to redraw the stage
		is_update_stage = true;
	}	
}

function stage_MouseDown(e) {
	// save current cursor position on stage
	stage.offset = {x: stage.x - e.stageX, y: stage.y - e.stageY};
	is_panning = true;

	// Save touch points for zooming
	if (is_touch_support) {

		// if (e.pointerID == 0 || e.pointerID == -1) { //touch 1 or mouse
		if (e.pointerID == 0 || e.pointerID == 1) { //touch 1 or mouse
			touch1 = stage.globalToLocal(e.stageX, e.stageY);

		// } else if (e.pointerID == 1) { //touch 2
		} else if (e.pointerID == 2) { //touch 2	
			touch2 = stage.globalToLocal(e.stageX, e.stageY);
		}
	}
}





function stage_MouseUp(e) {
	// disable panning
	is_panning = false;
}

function stage_PressUp(e) {

	if (is_touch_support) {
		// Clear touch points when zooming is done
		// if (e.pointerID == 0 || e.pointerID == -1) { //touch 1 or mouse
		if (e.pointerID == 0 || e.pointerID == 1) { //touch 1 or mouse
			touch1 = null;

		// } else if (e.pointerID == 1) { //touch 2
		} else if (e.pointerID == 2) { //touch 2
			touch2 = null;
		}
	}
}


function stage_PressMove(e) {
	if (is_touch_support) {

		if (touch1 && touch2) {
			let oldDistance = GetDistance(touch2, touch1);
			let newDistance = GetDistance(touch2, touch1);

			let newZoom = newDistance / oldDistance;
			let position = {
				x: (touch1.x + touch2.x)/2,
				y: (touch1.y + touch2.y)/2
			}

			// stage.globalToLocal(stage.mouseX, stage.mouseY);

			debug("newZoom: " + newZoom)
			debug("position: " + position.x + ", " + position.y)

			Zoom(newZoom, position);
		}
	}
}


function tick(e) {
	if (is_update_stage) {
		// this set makes it so the stage only re-renders when an event handler indicates a change has happened.
		is_update_stage = false; // only update once
		stage.update(e);
	}
}


var GetDistance = function(p1, p2) {
	var x = p2.x - p1.x;
	var y = p2.y - p1.y;

	return Math.sqrt((x * x) + (y * y));
};


function debug(text, is_clear_screen = false) {
	console.log(text)
}














// Initiate functions
const initComponent = (html) => {
	// Append html source code
	$("#app").append(html)

	init();
}

// Load HTML data
$("<div></div>").load(`${path}views/viewer.html`, initComponent)
