/* ----------------------------------------------------------
* Thumbnail bar Component
* ----------------------------------------------------------*/
// Plugin for horizontal scrolling
require("../../../../public/js/vendors/jquery.mousewheel.js")

const { ipcRenderer, remote } = require("electron")
const path = "./app/renderer-process/main-window/"
const { FluentHighlight } = require("../modules/fluent-highlight")

// Initiate functions
const initComponent = (html) => {
	// Append html source code
	$("#app").append(html)

	$(".thumbnail-bar").mousewheel(function(e, delta) {
		this.scrollLeft -= (delta * 40);
		e.preventDefault();
	});

	
	// FluentHighlight.applyTo(".thumb")

	






	var original_bg = $(".thumb").css("background-image"),
		light_color = "rgba(255,255,255,0.2)",
		gradient_size = 150;

	// Basic Demo
	$(".thumb").mousemove(function(e) {
		let x = e.pageX - $(this).offset().left;
		let y = e.pageY - $(this).offset().top;

		let bg_light = `radial-gradient(circle ${gradient_size}px at ${x}px ${y}px, ${light_color}, rgba(255,255,255,0))`

		$(this).css({ "background-image": bg_light });
	})
	.mouseleave(function() {
		$(this).css({ "background-image": original_bg });
	});











}

// Load HTML data
$("<div></div>").load(`${path}views/thumbnail-bar.html`, initComponent)
