import React from "react"

class WindowTitle extends React.Component {

    render() {

        return (<div className="window-title">
            <div className="title">
                <div className="title-text">
                    <span>ImageGlass</span>
                    <span>99/2031 files</span>
                    <span>100%</span>
                    <span>PNG</span>
                    <span>D:\Photos\Wallpapers\Vietnam\Sunrise-on-Ha-Long-Bay.png</span>
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