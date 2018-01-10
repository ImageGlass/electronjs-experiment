/* ----------------------------------------------------------
* Toolbar Component
* ----------------------------------------------------------*/

const { ipcRenderer, remote } = require("electron")
const path = "./app/renderer-process/main-window/"

import { FluentLightingEffect } from "../modules/fluent-design"

// Initiate functions
const initComponent = (html) => {
	// Append html source code
	$("#app").append(html)

	// apply Fluent Design effect
	FluentLightingEffect.applyTo(".toolbar", {
		light_color: "rgba(255,255,255,0.1)",
		gradient_size: 450
	})

}

// Load HTML data
$("<div></div>").load(`${path}views/toolbar.html`, initComponent)
