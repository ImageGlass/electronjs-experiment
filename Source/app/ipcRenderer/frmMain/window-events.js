/**********************************************************
* frmMain window events
***********************************************************/

const { ipcRenderer } = require("electron")


ipcRenderer.on("mainWindow_maximize", function (e, arg) {
	console.log("maxxxxxxxxx")
})

ipcRenderer.on("mainWindow_unmaximize", function (e, arg) {
	console.log("unmaxxxxx")
})

ipcRenderer.on("mainWindow_restore", function (e, arg) {
	console.log("resssss")
})





