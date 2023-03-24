import "./index.css"
import React from "react";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import { createFilter } from "react-search-input";
import AlbumCard from "../AlbumCard";
import { connect } from "react-redux";
import { addAlbums } from "../Store/actions";
class CardGrid extends React.Component {
    constructor(props) {
        super(props)
    }
    async fetchAllAlbums() {
        const baseUrl = "https://zjixv0m4di.execute-api.us-east-1.amazonaws.com/non-prod"
        const albumsPath = "/albums"
        const requestURL = baseUrl + albumsPath
        const params = {
            sort_key: "Rating",
            sort_order: "desc"
        };
        const headers = {
            "Content-Type": "application/json"
        }

        const response = await axios.get(requestURL, { headers: headers, params: params })
        return response.data
    }
    async componentDidMount() {
        const albumsResponse = await this.fetchAllAlbums()
        this.props.addAlbums(albumsResponse)

    }

    render() {
        const minYear = String(this.props.filterValues.minYear)
        const maxYear = String(this.props.filterValues.maxYear)
        const filterByYear = (album) => {
            const releaseDate = album.ReleaseDate
            const releaseYear = (releaseDate.substr(releaseDate.length - 4))
            return releaseYear >= minYear && releaseYear <= maxYear
        }

        const KEYS_TO_FILTERS = ['Title', 'Artist']
        let filteredAlbums = this.props.albums.filter(createFilter(this.props.filterValues.searchTerm, KEYS_TO_FILTERS))
        filteredAlbums = filteredAlbums.filter(filterByYear)


        return (
            <Row xs={1} md={3} className="card-grid">
                {filteredAlbums.map(album => (
                    < Col key={album.id} className="card-container" >
                        <AlbumCard album={album} />
                    </Col>)
                )
                }
            </Row>
        )
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


export default connect(mapStateToProps, { addAlbums })(CardGrid)