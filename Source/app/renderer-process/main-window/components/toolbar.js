/* ----------------------------------------------------------
* Toolbar Component
* ----------------------------------------------------------*/

const { ipcRenderer, remote } = require("electron")
const path = "./app/renderer-process/main-window/"

import { FluentUI } from "../modules/fluent-ui"

// Initiate functions
const initComponent = (html) => {
	// Append html source code
	$("#app").append(html)

	// apply Fluent Design effect
	FluentUI.applyTo(".toolbar", {
		light_color: "rgba(255,255,255,0.1)",
		light_effect_size: 450,
		click_effect_enable: false
	})

}

// Load HTML data
$("<div></div>").load(`${path}views/toolbar.html`, initComponent)
