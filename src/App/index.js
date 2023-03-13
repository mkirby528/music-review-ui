import "./index.css"
import AlbumCard from "./AlbumCard"
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from "axios"
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: []
        };
    }
    async componentDidMount() {
        const albumsResponse = await this.fetchAllAlbums()
        this.setState({ albums: albumsResponse })
    }
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

    render() {
        return (
            <div className="app">
                <Row xs={1} md={3} className="card-grid">
                    {this.state.albums.map(album => (
                        <Col className="card-container">
                            <AlbumCard album={album} />
                        </Col>)
                    )}
                </Row>
            </div>)
    }
}

export default App;
