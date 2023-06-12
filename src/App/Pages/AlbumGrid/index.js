import "./index.css"
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import CardGrid from "../../Components/CardGrid";
import Header from "../../Components/Header"
import { connect } from "react-redux";
import { addAlbums, updateSearchTerm, updateDateRange } from "../../Store/actions";

class AlbumGridPage extends React.Component {
    render() {
        return (
            <Container fluid className="app-page">
                <Header></Header>
                <CardGrid></CardGrid>
            </Container>)
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
export default connect(mapStateToProps, { addAlbums, updateSearchTerm, updateDateRange })(AlbumGridPage);
