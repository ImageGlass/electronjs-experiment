/**********************************************************
* frmMain window events
***********************************************************/

const { ipcRenderer } = require("electron")


ipcRenderer.on("mainWindow_maximize", function (e, arg) {
	$(".window-title").removeClass("window-maximize")
	$(".window-title").addClass("window-restore")
})

ipcRenderer.on("mainWindow_unmaximize", function (e, arg) {
	$(".window-title").removeClass("window-restore")
	$(".window-title").addClass("window-maximize")
})






