import React from "react";
import "./index.css"


class AlbumCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            album: this.props.album
        }
        console.log(props)
    }

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
                    <h1 className="album-title-text">{`${this.state.album.Title}`} </h1>
                    <h2 className="album-title-text">{`${this.state.album.Artist}`} </h2>
                </div>
            </div>)

    }
}


export default AlbumCard