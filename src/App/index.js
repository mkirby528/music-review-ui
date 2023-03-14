import "./index.css"
import AlbumCard from "./AlbumCard"
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from "axios"
import { Container } from "react-bootstrap";
import SearchInput, { createFilter } from 'react-search-input'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            albums: []

        };
        this.searchUpdated = this.searchUpdated.bind(this)


    }
    async componentDidMount() {
        const albumsResponse = await this.fetchAllAlbums()
        this.setState({ albums: albumsResponse })
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
    searchUpdated(term) {
        this.setState({ searchTerm: term })
    }

    render() {
        const KEYS_TO_FILTERS = ['Title', 'Artist']

        const filteredAlbums = this.state.albums.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
        console.log(this.state.searchTerm)
        console.log(filteredAlbums)

        return (
            <Container fluid className="app">
                <Row className="header">
                    <SearchInput className="search-input" fuzzy onChange={this.searchUpdated} />
                </Row>
                <Row xs={1} md={3} className="card-grid">
                    {filteredAlbums.map(album => (
                        <Col key={album.id} className="card-container">
                            <AlbumCard album={album} />
                        </Col>)
                    )}
                </Row>
            </Container>)
    }
}

export default App;
