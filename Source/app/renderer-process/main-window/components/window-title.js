/* ----------------------------------------------------------
* Window Title Component
* ----------------------------------------------------------*/

const { ipcRenderer, remote } = require("electron")
const path = "./app/renderer-process/main-window/"

import { FluentLightingEffect } from "../modules/fluent-design"


// Minimize button click event
const handleMinimizeClick = (e) => {
	e.preventDefault()
	remote.BrowserWindow.getFocusedWindow().minimize()
}

// Maximize/Restore button click event
const handleWindowStateClick = (e) => {
	e.preventDefault()

	if (remote.BrowserWindow.getFocusedWindow().isMaximized()) {
		remote.BrowserWindow.getFocusedWindow().restore()
	}
	else {
		remote.BrowserWindow.getFocusedWindow().maximize();
	}
}

// Close button click event
const handleCloseClick = (e) => {
	e.preventDefault()
	remote.BrowserWindow.getFocusedWindow().close()
}









// Initiate functions
const initComponent = (html) => {
	// Append html source code
	$("#app").append(html)

	// apply Fluent Design effect
	FluentLightingEffect.applyTo(".title-control")


	if (remote.BrowserWindow.getFocusedWindow().isMaximized()) {
		$(".window-title").addClass("window-restore")
	}
	else {
		$(".window-title").addClass("window-maximize")
	}
	
	$(".title-control.minimize").click(handleMinimizeClick)
	$(".title-control.window-state").click(handleWindowStateClick)
	$(".title-control.close").click(handleCloseClick)
}


// Load HTML data
$("<div></div>").load(`${path}views/window-title.html`, initComponent)


