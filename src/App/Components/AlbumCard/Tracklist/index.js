import React from "react";
import "./index.css"
import { Container } from "react-bootstrap";


class Tracklist extends React.Component {
    render() {
        return (
            <Container className="tracklist-container">
                <h6 className="tracklist-label">Tracklist</h6>
                {this.props.tracks.map((track, index) => {
                    return <p key={index} className="tracklist-item-container">{index + 1}.&nbsp;{track}</p>
                })}
            </Container>
        )
    }
}
export default Tracklist