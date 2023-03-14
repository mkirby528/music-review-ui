import React from "react";
import "./index.css"
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from 'react-bootstrap/Tooltip';

class AlbumCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            album: this.props.album
        }
    }
    renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {this.state.album.Title}
        </Tooltip>
    );


    render() {
        return (
            <div className="album-card">
                <div className="card-top">
                    <div className="card-top-column">
                        <img className="album-cover-image" alt={`${this.state.album.Title} album cover`} src={this.state.album.Images.md} />
                    </div>
                    <div className="card-top-column">
                        <div className="ratings-container">
                            <span className="rating-text">{`${this.state.album.Rating}`}</span>
                        </div>
                        <div className="play-now-container">
                            <a className="spotify-logo-link" href={this.state.album.SpotifyURI} target="_blank" rel="noreferrer">
                                <img className="spotify-logo" src="/spotify_logo.svg" alt="spotify logo" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card-bottom">
                    <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 400 }}
                        overlay={this.renderTooltip}
                    >
                        <h1 className="album-title-text">{`${this.state.album.Title}`} </h1>
                    </OverlayTrigger>
                    <h2 className="album-title-text">{`${this.state.album.Artist}`} </h2>
                </div>
            </div>)

    }
}


export default AlbumCard