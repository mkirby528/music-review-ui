import React from "react";
import "./index.css"

class AlbumFullView extends React.Component {
    render() {
        console.log(this.props.album["OpenAIReview"])
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