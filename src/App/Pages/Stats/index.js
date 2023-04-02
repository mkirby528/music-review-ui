import "./index.css"
import React from "react";
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import Header from "../../Components/Header"
import { connect } from "react-redux";
import { addAlbums, updateSearchTerm, updateDateRange } from "../../Store/actions";

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
            this.props.addAlbums(albumsResponse)
        }
    }

    render() {

        return (
            <Container fluid className="app" >
                <Header />
                <h1 className="total-review-count-label">Total Reviews: {this.props.albums.length}</h1>

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
