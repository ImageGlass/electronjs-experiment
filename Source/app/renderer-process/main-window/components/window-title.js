const { ipcRenderer, remote } = require("electron")
const path = "./app/renderer-process/main-window/"


const handleMinimizeClick = (e) => {
	e.preventDefault()
	remote.BrowserWindow.getFocusedWindow().minimize()
}

const handleWindowStateClick = (e) => {
	e.preventDefault()

	if (remote.BrowserWindow.getFocusedWindow().isMaximized()) {
		remote.BrowserWindow.getFocusedWindow().restore()
	}
	else {
		remote.BrowserWindow.getFocusedWindow().maximize();
	}
}


const handleCloseClick = (e) => {
	e.preventDefault()
	remote.BrowserWindow.getFocusedWindow().close()
}









// Initiate functions
const initComponent = () => {

	if (remote.BrowserWindow.getFocusedWindow().isMaximized()) {
		$(".title-control.window-state").addClass("restore")
	}
	else {
		$(".title-control.window-state").addClass("maximize")
	}
	
	$(".title-control.minimize").click(handleMinimizeClick)
	$(".title-control.window-state").click(handleWindowStateClick)
	$(".title-control.close").click(handleCloseClick)
}


// Load HTML data
$("#app").load(`${path}views/window-title.html`, initComponent)


