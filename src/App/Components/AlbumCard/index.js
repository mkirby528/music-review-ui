import React from "react";
import "./index.css"
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from 'react-bootstrap/Tooltip';
import ReactCardFlip from 'react-card-flip';
import axios from "axios";
import Tracklist from "./Tracklist"
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import AlbumFullView from "../AlbumFullView";

class AlbumCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            album: this.props.album,
            isFlipped: false,
            modalOpen: false
        }
    }

    flipCard = (e) => {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    openModal = () => {
        this.setState({ modalOpen: true })
    }
    closeModal = () => {
        this.setState({ modalOpen: false })
    }
    toggleHaveVinyl = async () => {
        const newValue = !this.state.album.HaveVinyl
        if (newValue) {
            const baseUrl = "https://zjixv0m4di.execute-api.us-east-1.amazonaws.com/non-prod"
            const addVinylPath = `/albums/${this.state.album.id}/addVinyl`
            const requestURL = baseUrl + addVinylPath
            try {
                const response = await axios.patch(requestURL, {}, {
                    headers: {
                        'content-type': 'application/json'
                    }
                });
                if (response.status === 200) {
                    const newAlbumObject = { ...this.state.album, "HaveVinyl": newValue }
                    console.log(newAlbumObject)
                    this.setState({ album: newAlbumObject })
                }

            } catch (err) {
                console.log(err)
            }
        }


    }
    renderTitleTooltip = (props, field) => (
        <Tooltip id="button-tooltip" {...props}>
            {this.state.album.Title}
        </Tooltip>
    );
    renderArtistTooltip = (props, field) => (
        <Tooltip id="button-tooltip" {...props}>
            {this.state.album.ArtistsString}
        </Tooltip>
    );


    render() {
        return (
            <div className="album-card-container">
                <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal" containerClassName="album-card">
                    <div className="card-front">
                        <div className="card-top">
                            <div className="card-top-column">
                                <img className="album-cover-image" alt={`${this.state.album.Title} album cover`} src={this.state.album.CoverImage} />
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
                                overlay={this.renderTitleTooltip}
                            >
                                <h1 className="album-title-text">{`${this.state.album.Title}`} </h1>
                            </OverlayTrigger>
                            <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={this.renderArtistTooltip}
                            >
                                <h2 className="album-title-text">{this.state.album.ArtistsString}</h2>
                            </OverlayTrigger>
                        </div>
                        <i onClick={this.toggleHaveVinyl} className={this.state.album.HaveVinyl ? 'fa-solid fa-record-vinyl record-icon record-icon-owned' : 'fa-solid fa-record-vinyl record-icon'}></i>
                        <i onClick={this.openModal} className="open-modal-icon fa-solid fa-maximize"></i>
                        <i onClick={this.flipCard} className="fa-solid fa-rotate flip-icon"></i>
                    </div>
                    <div className="card-back">
                        <Tracklist tracks={this.state.album.Tracks ? this.state.album.Tracks : []} />

                        <i onClick={this.flipCard} className="fa-solid fa-rotate flip-icon"></i>

                    </div>
                </ReactCardFlip>
                <Modal
                    aria-labelledby="modal-title"
                    aria-describedby="modal-desc"
                    open={this.state.modalOpen}
                    onClose={this.closeModal}
                    className="album-modal"
                    sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                    <div className="modal-content-container">
                        <ModalClose variant="outlined" />
                        <AlbumFullView album={this.state.album} />
                    </div>
                </Modal>
            </div>
        )

    }
}

export default AlbumCard