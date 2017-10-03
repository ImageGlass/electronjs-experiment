import React from "react"

class WindowTitle extends React.Component {

    render() {

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
            <div className="title-control minimize"></div>
            <div className="title-control maximize"></div>
            <div className="title-control close"></div>
        </div>
        )

    }
}


export default WindowTitle