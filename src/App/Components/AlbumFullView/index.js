import React from "react";
import "./index.css"

class AlbumFullView extends React.Component {
    render() {
        return (
            <div className="album-full-view-container">
                {this.props.album["Title"]}
                <br />
                {this.props.album["OpenAIReview"]}
            </div>
        )

    }
}

export default AlbumFullView