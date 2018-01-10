/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**********************************************
 * Fluent Design Lighting Effect
 **********************************************/
var FluentLightingEffect = exports.FluentLightingEffect = function () {
	function FluentLightingEffect() {
		_classCallCheck(this, FluentLightingEffect);
	}

	_createClass(FluentLightingEffect, null, [{
		key: "applyTo",
		value: function applyTo(selector) {
			var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

			// console.log("hello")

			var _option = {
				original_bg: $(selector).css("background-image"),
				light_color: "rgba(255,255,255,0.15)",
				gradient_size: $(selector).outerWidth()

				// update options
			};_option = Object.assign(_option, option);

			$(selector).mousemove(function (e) {
				var x = e.pageX - $(this).offset().left;
				var y = e.pageY - $(this).offset().top;

				var bg_light = "radial-gradient(circle " + _option.gradient_size + "px at " + x + "px " + y + "px, " + _option.light_color + ", rgba(255,255,255,0))";

				$(this).css({ "background-image": bg_light });
			}).mouseleave(function () {
				$(this).css({ "background-image": _option.original_bg });
			});
		}
	}]);

	return FluentLightingEffect;
}();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _app = __webpack_require__(3);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var _require = __webpack_require__(0),
    webFrame = _require.webFrame,
    remote = _require.remote;

// disable zoom in/out functionality in app
// webFrame.setVisualZoomLevelLimits(1, 1)
// webFrame.setLayoutZoomLevelLimits(0, 0)

console.log(remote.getGlobal("author"));

// detect OS type
$("html").addClass(process.platform);

// add Main window
__webpack_require__(4);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* ----------------------------------------------------------
* Main Window Form
* ----------------------------------------------------------*/

// Browser Window Events
__webpack_require__(5);

// Add Window Title component
__webpack_require__(6);

// Add Toolbar component
__webpack_require__(7);

// Add Viewer bar component
__webpack_require__(8);

// Add Thumbnail bar component
__webpack_require__(9);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**********************************************************
* frmMain window events
***********************************************************/

var _require = __webpack_require__(0),
    ipcRenderer = _require.ipcRenderer;

ipcRenderer.on("mainWindow_maximize", function (e, arg) {
	$(".window-title").removeClass("window-maximize");
	$(".window-title").addClass("window-restore");
});

ipcRenderer.on("mainWindow_unmaximize", function (e, arg) {
	$(".window-title").removeClass("window-restore");
	$(".window-title").addClass("window-maximize");
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fluentDesign = __webpack_require__(1);

/* ----------------------------------------------------------
* Window Title Component
* ----------------------------------------------------------*/

var _require = __webpack_require__(0),
    ipcRenderer = _require.ipcRenderer,
    remote = _require.remote;

var path = "./app/renderer-process/main-window/";

// Minimize button click event
var handleMinimizeClick = function handleMinimizeClick(e) {
	e.preventDefault();
	remote.BrowserWindow.getFocusedWindow().minimize();
};

// Maximize/Restore button click event
var handleWindowStateClick = function handleWindowStateClick(e) {
	e.preventDefault();

	if (remote.BrowserWindow.getFocusedWindow().isMaximized()) {
		remote.BrowserWindow.getFocusedWindow().restore();
	} else {
		remote.BrowserWindow.getFocusedWindow().maximize();
	}
};

// Close button click event
var handleCloseClick = function handleCloseClick(e) {
	e.preventDefault();
	remote.BrowserWindow.getFocusedWindow().close();
};

// Initiate functions
var initComponent = function initComponent(html) {
	// Append html source code
	$("#app").append(html);

	// apply Fluent Design effect
	_fluentDesign.FluentLightingEffect.applyTo(".title-control");

	if (remote.BrowserWindow.getFocusedWindow().isMaximized()) {
		$(".window-title").addClass("window-restore");
	} else {
		$(".window-title").addClass("window-maximize");
	}

	$(".title-control.minimize").click(handleMinimizeClick);
	$(".title-control.window-state").click(handleWindowStateClick);
	$(".title-control.close").click(handleCloseClick);
};

// Load HTML data
$("<div></div>").load(path + "views/window-title.html", initComponent);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fluentDesign = __webpack_require__(1);

/* ----------------------------------------------------------
* Toolbar Component
* ----------------------------------------------------------*/

var _require = __webpack_require__(0),
    ipcRenderer = _require.ipcRenderer,
    remote = _require.remote;

var path = "./app/renderer-process/main-window/";

// Initiate functions
var initComponent = function initComponent(html) {
	// Append html source code
	$("#app").append(html);

	// apply Fluent Design effect
	_fluentDesign.FluentLightingEffect.applyTo(".toolbar", {
		light_color: "rgba(255,255,255,0.1)",
		gradient_size: 450
	});
};

// Load HTML data
$("<div></div>").load(path + "views/toolbar.html", initComponent);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* ----------------------------------------------------------
* Viewer Component
* ----------------------------------------------------------*/

var _require = __webpack_require__(0),
    ipcRenderer = _require.ipcRenderer,
    remote = _require.remote;

var path = "./app/renderer-process/main-window/";

var canvas; //Will be linked to the canvas in our index.html page
var stage; //
var touch1, touch2;
var is_update_stage = false;

var img = "https://www.w3schools.com/css/img_fjords.jpg";
var index = 0;
var img_list = ["https://static.pexels.com/photos/33443/pexels-photo.jpg", "https://lh3.googleusercontent.com/gN6iBKP1b2GTXZZoCxhyXiYIAh8QJ_8xzlhEK6csyDadA4GdkEdIEy9Bc8s5jozt1g=w300", "https://cdn.glitch.com/ace687ad-01fb-468f-ba6b-a67283811a0c%2Fcar.svg?1504800679560", "http://www.gravatar.com/avatar/4ff020826d61a6cfd875cb5cc29e5ce6/?default=&s=80", "https://www.w3schools.com/css/img_fjords.jpg"];
// var btnNext, btnBack;


var is_panning = false;
var is_touch_support = false;
var SCALE_FACTOR = 1.1;

function init() {
	stage = new createjs.StageGL("picMain", { antialias: true, transparent: true });
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
}

function LoadImage(step) {

	index += step;
	if (index >= img_list.length) index = 0;
	if (index < 0) index = img_list.length - 1;
	// console.log(index)

	var pic = new createjs.Bitmap(img_list[index]);

	pic.image.onload = function () {

		var graphics = new createjs.Graphics().beginFill("red").drawRect(0, 0, pic.image.width, pic.image.height);
		pic.hitArea = new createjs.Shape(graphics);

		pic.x = canvas.width / 2 - pic.image.width / 2;
		pic.y = canvas.height / 2 - pic.image.height / 2;

		// tell timer to redraw the stage
		is_update_stage = true;
	};

	stage.removeAllChildren();
	stage.addChild(pic);
}

ipcRenderer.on("mainWindow_resize", function (e, arg) {
	//console.log("================")	
	Resize();
});

function Resize() {
	var forceUpdateStage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

	var $viewer = $("#viewer");
	var w = $viewer.outerWidth();
	var h = $viewer.outerHeight();

	// console.log(w + "__" + h)

	// update canvas size
	canvas.width = w;
	canvas.height = h;

	stage.updateViewport(w, h);

	if (forceUpdateStage) {
		// tell timer to redraw the stage
		is_update_stage = true;
	}
}

function Zoom(delta) {
	var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


	var factor = Math.pow(SCALE_FACTOR, delta);
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
	var delta = e.wheelDelta ? e.wheelDelta / 40 : e.detail ? -e.detail : 0;
	Zoom(delta);
}

function stage_MouseMove(e) {
	if (is_panning) {
		var newX = e.stageX + stage.offset.x;
		var newY = e.stageY + stage.offset.y;

		stage.x = newX;
		stage.y = newY;

		// tell timer to redraw the stage
		is_update_stage = true;
	}
}

function stage_MouseDown(e) {
	// save current cursor position on stage
	stage.offset = { x: stage.x - e.stageX, y: stage.y - e.stageY };
	is_panning = true;

	// Save touch points for zooming
	if (is_touch_support) {

		// if (e.pointerID == 0 || e.pointerID == -1) { //touch 1 or mouse
		if (e.pointerID == 0 || e.pointerID == 1) {
			//touch 1 or mouse
			touch1 = stage.globalToLocal(e.stageX, e.stageY);

			// } else if (e.pointerID == 1) { //touch 2
		} else if (e.pointerID == 2) {
			//touch 2	
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
		if (e.pointerID == 0 || e.pointerID == 1) {
			//touch 1 or mouse
			touch1 = null;

			// } else if (e.pointerID == 1) { //touch 2
		} else if (e.pointerID == 2) {
			//touch 2
			touch2 = null;
		}
	}
}

function stage_PressMove(e) {
	if (is_touch_support) {

		if (touch1 && touch2) {
			var oldDistance = GetDistance(touch2, touch1);
			var newDistance = GetDistance(touch2, touch1);

			var newZoom = newDistance / oldDistance;
			var position = {
				x: (touch1.x + touch2.x) / 2,
				y: (touch1.y + touch2.y) / 2

				// stage.globalToLocal(stage.mouseX, stage.mouseY);

			};debug("newZoom: " + newZoom);
			debug("position: " + position.x + ", " + position.y);

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

var GetDistance = function GetDistance(p1, p2) {
	var x = p2.x - p1.x;
	var y = p2.y - p1.y;

	return Math.sqrt(x * x + y * y);
};

function debug(text) {
	var is_clear_screen = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	console.log(text);
}

// Initiate functions
var initComponent = function initComponent(html) {
	// Append html source code
	$("#app").append(html);

	init();
};

// Load HTML data
$("<div></div>").load(path + "views/viewer.html", initComponent);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fluentDesign = __webpack_require__(1);

/* ----------------------------------------------------------
* Thumbnail bar Component
* ----------------------------------------------------------*/
// Plugin for horizontal scrolling
__webpack_require__(10);

var _require = __webpack_require__(0),
    ipcRenderer = _require.ipcRenderer,
    remote = _require.remote;

var path = "./app/renderer-process/main-window/";

// Initiate functions
var initComponent = function initComponent(html) {
	// Append html source code
	$("#app").append(html);

	$(".thumbnail-bar").mousewheel(function (e, delta) {
		this.scrollLeft -= delta * 40;
		e.preventDefault();
	});

	// apply Fluent Design effect
	_fluentDesign.FluentLightingEffect.applyTo(".thumb");

	_fluentDesign.FluentLightingEffect.applyTo(".thumbnail-bar", {
		light_color: "rgba(255,255,255,0.1)",
		gradient_size: 450
	});
};

// Load HTML data
$("<div></div>").load(path + "views/thumbnail-bar.html", initComponent);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */

(function ($) {

    var types = ['DOMMouseScroll', 'mousewheel'];

    if ($.event.fixHooks) {
        for (var i = types.length; i;) {
            $.event.fixHooks[types[--i]] = $.event.mouseHooks;
        }
    }

    $.event.special.mousewheel = {
        setup: function setup() {
            if (this.addEventListener) {
                for (var i = types.length; i;) {
                    this.addEventListener(types[--i], handler, false);
                }
            } else {
                this.onmousewheel = handler;
            }
        },

        teardown: function teardown() {
            if (this.removeEventListener) {
                for (var i = types.length; i;) {
                    this.removeEventListener(types[--i], handler, false);
                }
            } else {
                this.onmousewheel = null;
            }
        }
    };

    $.fn.extend({
        mousewheel: function mousewheel(fn) {
            return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
        },

        unmousewheel: function unmousewheel(fn) {
            return this.unbind("mousewheel", fn);
        }
    });

    function handler(event) {
        var orgEvent = event || window.event,
            args = [].slice.call(arguments, 1),
            delta = 0,
            returnValue = true,
            deltaX = 0,
            deltaY = 0;
        event = $.event.fix(orgEvent);
        event.type = "mousewheel";

        // Old school scrollwheel delta
        if (orgEvent.wheelDelta) {
            delta = orgEvent.wheelDelta / 120;
        }
        if (orgEvent.detail) {
            delta = -orgEvent.detail / 3;
        }

        // New school multidimensional scroll (touchpads) deltas
        deltaY = delta;

        // Gecko
        if (orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
            deltaY = 0;
            deltaX = -1 * delta;
        }

        // Webkit
        if (orgEvent.wheelDeltaY !== undefined) {
            deltaY = orgEvent.wheelDeltaY / 120;
        }
        if (orgEvent.wheelDeltaX !== undefined) {
            deltaX = -1 * orgEvent.wheelDeltaX / 120;
        }

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }
})(jQuery);

/***/ })
/******/ ]);