import "./index.css"
import React from "react";
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import Header from "../../Components/Header"
import { connect } from "react-redux";
import Histogram from "../../Components/Stats/Histogram";
import ArtistsTable from "../../Components/Stats/ArtistsTable";
import { addAlbums, updateSearchTerm, updateDateRange } from "../../Store/actions";
import { Col, Row } from "react-bootstrap";

class StatsPage extends React.Component {

    async fetchAllAlbums() {
        const baseUrl = "https://zjixv0m4di.execute-api.us-east-1.amazonaws.com/non-prod"
        const albumsPath = "/albums"
        const requestURL = baseUrl + albumsPath
        const headers = {
            "Content-Type": "application/json"
        }

        const response = await axios.get(requestURL, { headers: headers })
        return response.data
    }
    async componentDidMount() {
        if (!this.props.albums || this.props.albums.length === 0) {
            const albumsResponse = await this.fetchAllAlbums()
            await this.props.addAlbums(albumsResponse)

        }
    }



    render() {

        return (
            <Container fluid className="app-page" >
                <Header />
                <Row className="data-container">
                    <Col className="stats-page-col" xs={12} md={6}>
                        <h2 className="album-count-text">{this.props.albums.length} total albums reviewed</h2>
                        <Histogram color="DeepSkyBlue" field="Rating" albums={this.props.albums} />
                        <Histogram color="Orange" field="ReleaseYear" albums={this.props.albums} />
                        <Histogram color="SpringGreen" field="HaveVinyl" albums={this.props.albums} />
                        <Histogram color="LightSlateBlue" field="NumberOfTracks" albums={this.props.albums} />

                      


                    </Col>
                    <Col className="stats-page-col" xs={12} md={6}>
                        <ArtistsTable />
                    </Col>
                </Row >
            </Container >)
    }
}

function mapStateToProps(state) {
    const { albumsStore } = state
    return {
        albums: albumsStore.albums,
        filterValues: albumsStore.filterValues,
        isLoading: albumsStore.isLoading
    }
}

export default connect(mapStateToProps, { addAlbums, updateSearchTerm, updateDateRange })(StatsPage);
