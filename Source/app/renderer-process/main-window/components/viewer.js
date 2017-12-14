/* ----------------------------------------------------------
* Viewer Component
* ----------------------------------------------------------*/

const { ipcRenderer, remote } = require("electron")
const path = "./app/renderer-process/main-window/"


// Initiate functions
const initComponent = (html) => {
	// Append html source code
	$("#app").append(html)


}

// Load HTML data
$("<div></div>").load(`${path}views/viewer.html`, initComponent)
