/**********************************************************
* frmMain window events
***********************************************************/

const { ipcRenderer } = require("electron")


ipcRenderer.on("mainWindow_maximize", function (e, arg) {
	$(".title-control.window-state").removeClass("maximize")
	$(".title-control.window-state").addClass("restore")
})

ipcRenderer.on("mainWindow_unmaximize", function (e, arg) {
	$(".title-control.window-state").removeClass("restore")
	$(".title-control.window-state").addClass("maximize")
})







