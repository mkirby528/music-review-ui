import "./index.css"
import React from "react";
import { connect } from "react-redux";
import { Button, Col, Row } from "react-bootstrap";


class SelectAlbum extends React.Component {
    selectAlbum = (album) => {
        this.props.updateSelectedAlbum(album)
        this.props.continues()
    }
    render() {
        console.log(this.props.spotifyResults)
        return (
            <div className="spotify-results-step">
                <h1>Spotify Results</h1>
                <p>Select an Album as base item for review (can be edited)</p>
                <Row className="results-row">
                    {this.props.spotifyResults.slice(0, 5).map((album, i) => {
                        return (
                            <Col className="result-col" xs={12} md={6} key={album.id}>
                                <Row className="result-card">
                                    <Col className="result-card-column" xs={6}>
                                        <h5>{album.Title}</h5>
                                        <h6>{album.ArtistString}</h6>

                                    </Col>
                                    <Col
                                        className="result-card-column" xs={6}>
                                        <img
                                            src={album.CoverImage}
                                            loading="lazy"
                                            className="result-cover-image"
                                            alt=""></img>
                                        <Button className="select-button" onClick={() => this.selectAlbum(album)}> SelectAlbum</Button>
                                    </Col>
                                </Row>
                            </Col>
                        )
                    })}
                    <Col className="result-col" xs={12} md={6}>
                        <Row className="result-card">
                            <Col className="result-card-column" xs={6}>
                                <Button onClick={() => this.selectAlbum({})} className="select-button"> Start from Scratch</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div >)
    }
}
export default connect(null, null)(SelectAlbum);
