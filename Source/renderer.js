// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const { webFrame, remote } = require("electron")
import Style from "./app/scss/app.scss"


// disable zoom in/out functionality in app
// webFrame.setVisualZoomLevelLimits(1, 1)
// webFrame.setLayoutZoomLevelLimits(0, 0)

console.log(remote.getGlobal("author"))

// detect OS type
$("html").addClass(process.platform)


// add Main window
require("./app/renderer-process/main-window/main-window")
