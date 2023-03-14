import "./index.css"
import React from "react";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import { createFilter } from "react-search-input";
import AlbumCard from "../AlbumCard";
class CardGrid extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            albums: []
        }
    }
    async fetchAllAlbums() {
        const baseUrl = "https://zjixv0m4di.execute-api.us-east-1.amazonaws.com/non-prod"
        const albumsPath = "/albums"
        const requestURL = baseUrl + albumsPath
        const params = {
            sort_key: "Artist",
        };
        const headers = {
            "Content-Type": "application/json"
        }

        const response = await axios.get(requestURL, { headers: headers, params: params })
        return response.data
    }
    async componentDidMount() {
        const albumsResponse = await this.fetchAllAlbums()
        this.setState({ albums: albumsResponse })
    }
    render() {
        const KEYS_TO_FILTERS = ['Title', 'Artist']
        const filteredAlbums = this.state.albums.filter(createFilter(this.props.searchTerm, KEYS_TO_FILTERS))

        return (
            <Row xs={1} md={3} className="card-grid">
                {filteredAlbums.map(album => (
                    <Col key={album.id} className="card-container">
                        <AlbumCard album={album} />
                    </Col>)
                )}
            </Row>
        )
    }
}

export default CardGrid