import React from "react"
import ReactDOM from "react-dom"
import Style from "./styles/main.scss"

// import frmMain components
import ControlBar from "./frmMain/components/control-bar.component"
import ThumbnailBar from "./frmMain/components/thumbnail-bar.component"
import Toolbar from "./frmMain/components/toolbar.component"
import Viewer from "./frmMain/components/viewer.component"


class App extends React.Component {
  render() {
    return (<div>
      <ControlBar />
      <ThumbnailBar />
      <Toolbar />
      <Viewer />
    </div>);
  }
}

ReactDOM.render(
  <App />, document.getElementById("app")
)

export default App