/* ----------------------------------------------------------
* Thumbnail bar Component
* ----------------------------------------------------------*/
// Plugin for horizontal scrolling
require("../../../../public/js/vendors/jquery.mousewheel.js")

const { ipcRenderer, remote } = require("electron")
const path = "./app/renderer-process/main-window/"

import { FluentUI } from "../modules/fluent-ui"


// Initiate functions
const initComponent = (html) => {
	// Append html source code
	$("#app").append(html)

	$(".thumbnail-bar").mousewheel(function(e, delta) {
		this.scrollLeft -= (delta * 40);
		e.preventDefault();
	});

	
	// apply Fluent Design effect
	FluentUI.applyTo(".thumb")

	FluentUI.applyTo(".thumbnail-bar", {
		light_color: "rgba(255,255,255,0.1)",
		light_effect_size: 450,
		click_effect_enable: false
	})
	


}

// Load HTML data
$("<div></div>").load(`${path}views/thumbnail-bar.html`, initComponent)
