import "./App.css"
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import CardGrid from "./CardGrid";
import Header from "./Header"
import { connect } from "react-redux";
import { addAlbums, updateSearchTerm, updateDateRange } from "./Store/actions";

class App extends React.Component {
    render() {
        return (
            <Container fluid className="app">
                <Header updateSearchFunction={this.searchUpdated} releaseDateRangeUpdated={this.releaseDateRangeUpdated}></Header>
                <CardGrid></CardGrid>
            </Container>)
    }
}



export default connect(null, { addAlbums, updateSearchTerm, updateDateRange })(App);
