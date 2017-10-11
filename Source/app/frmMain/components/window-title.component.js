import React from "react"
const { ipcRenderer, remote } = require("electron")

class WindowTitle extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isMaximized: false,

            windowSize: remote.BrowserWindow.getFocusedWindow().getSize(),
            windowPosition: remote.BrowserWindow.getFocusedWindow().getPosition()
        }

        this.handleMinimizeClick = this.handleMinimizeClick.bind(this)
        this.handleMaximizeClick = this.handleMaximizeClick.bind(this)
        this.handleRestoreClick = this.handleRestoreClick.bind(this)
        this.handleCloseClick = this.handleCloseClick.bind(this)
    }

    handleMinimizeClick(e) {
        e.preventDefault()
        remote.BrowserWindow.getFocusedWindow().minimize()
    }

    handleMaximizeClick(e) {
        e.preventDefault()

        
        this.setState({
            windowSize: remote.BrowserWindow.getFocusedWindow().getSize(),
            windowPosition: remote.BrowserWindow.getFocusedWindow().getPosition()
        })

        remote.BrowserWindow.getFocusedWindow().maximize()

        this.setState({
            isMaximized: true
        })
    }

    handleRestoreClick(e) {
        e.preventDefault()
        remote.BrowserWindow.getFocusedWindow().restore()
        this.setState({
            isMaximized: false
        })

        remote.BrowserWindow.getFocusedWindow().setSize(this.state.windowSize[0], this.state.windowSize[1], false)
        remote.BrowserWindow.getFocusedWindow().setPosition(this.state.windowPosition[0], this.state.windowPosition[1], false)
    }

    handleCloseClick(e) {
        e.preventDefault()
        remote.BrowserWindow.getFocusedWindow().close()
        // ipcRenderer.send("close-main-window")
    }


    render() {

        let btn_window_state = null

        // Window is maximized state, display Restore button
        if (this.state.isMaximized) {
            btn_window_state = <div className="title-control minimize" onClick={this.handleRestoreClick}></div>
        }
        // Window is in normal state, display Maximize button
        else {
            btn_window_state = <div className="title-control maximize" onClick={this.handleMaximizeClick}></div>
        }

        return (<div className="window-title">
            <div className="title">
                <div className="title-text">
                    <span>ImageGlass</span>
                    <span>99/2031 files</span>
                    <span>Sunrise-on-Ha-Long-Bay.png</span>
                    <span>100%</span>
                    <span>1920 x 900 px</span>
                    <span>3.25 MB</span>
                    
                </div>
            </div>
            <div className="title-control minimize" onClick={this.handleMinimizeClick}></div>
            {btn_window_state}
            <div className="title-control close" onClick={this.handleCloseClick}></div>
        </div>
        )

    }
}


export default WindowTitle