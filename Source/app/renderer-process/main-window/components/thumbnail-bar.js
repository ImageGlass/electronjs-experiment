/* ----------------------------------------------------------
* Thumbnail bar Component
* ----------------------------------------------------------*/
// Plugin for horizontal scrolling
require("../../../../public/js/vendors/jquery.mousewheel.js")

const { ipcRenderer, remote } = require("electron")
const path = "./app/renderer-process/main-window/"


// Initiate functions
const initComponent = (html) => {
	// Append html source code
	$("#app").append(html)

	$(".thumbnail-bar").mousewheel(function(e, delta) {
        this.scrollLeft -= (delta * 40);
        e.preventDefault();
    });
}

// Load HTML data
$("<div></div>").load(`${path}views/thumbnail-bar.html`, initComponent)
