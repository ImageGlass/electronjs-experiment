// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const React = require('react');
const ReactDOM = require('react-dom');

// disable zoom in/out functionality in app
const { webFrame } = require('electron');
webFrame.setVisualZoomLevelLimits(1, 1);
webFrame.setLayoutZoomLevelLimits(0, 0);



import App from './app/app';

ReactDOM.render(<App />, document.getElementById('app'));


