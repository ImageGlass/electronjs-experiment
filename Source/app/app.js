import React from "react"
import ReactDOM from "react-dom"
import Style from "./styles/app.scss"

// import frmMain components
import WindowTitle from "./frmMain/components/window-title.component"
import ControlBar from "./frmMain/components/control-bar.component"
import ThumbnailBar from "./frmMain/components/thumbnail-bar.component"
import Toolbar from "./frmMain/components/toolbar.component"
import Viewer from "./frmMain/components/viewer.component"


class App extends React.Component {
  render() {
    return (<div className="app-root">
      <WindowTitle />
      <Toolbar />
      <Viewer />
      <ThumbnailBar />
      <ControlBar />
    </div>);
  }
}

ReactDOM.render(
  <App />, document.getElementById("app")
)

export default App